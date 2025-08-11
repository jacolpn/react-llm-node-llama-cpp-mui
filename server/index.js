  import express from 'express';
  import cors from 'cors';
  import { LlamaModel, LlamaContext, LlamaChatSession } from 'node-llama-cpp';

  const PORT = 3001;

  const app = express();

  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));
  app.use(express.json({ limit: '50mb' }))

  const model = new LlamaModel({
    modelPath: '../models/mistral-7b-instruct-v0.2.Q3_K_S.gguf'
  });
  const context = new LlamaContext({ model });
  const session = new LlamaChatSession({
    context,
    temperature: 0.1,
  });

  const generateConversationId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < 32; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    return result;
  };

  const cleanAndTransformData = (tableContext) => {
      try {
          // Se for string, tenta fazer parse
          if (typeof tableContext === 'string') {
              tableContext = JSON.parse(tableContext);
          }
          
          // Garante que é um array
          if (!Array.isArray(tableContext)) {
              tableContext = [tableContext];
          }

          // Processa cada item e converte para string formatada
          const processedData = tableContext.map(({ examples, allowedOperators, ...rest }) => {
              return JSON.stringify(rest, null, 2); // Formata com indentação
          });

          return processedData.join('\n'); // Junta com quebras de linha
      } catch (e) {
          console.error('Error processing table context:', e);
          return '[]'; // Retorna array vazio como fallback
      }
  }

  const filterRelevantFields = (userCommand, tableContext) => {
    console.log('userCommand', userCommand)
    console.log('tableContext', tableContext)
    try {
        // Parse e normalização do contexto
        if (typeof tableContext === 'string') {
            tableContext = JSON.parse(tableContext);
        }
        
        if (!Array.isArray(tableContext)) {
            tableContext = [tableContext];
        }

        // Extrai todas as palavras do comando do usuário para comparação
        const userCommandWords = userCommand.toLowerCase().split(/\s+/);
        
        // Filtra os campos onde a description corresponde exatamente a qualquer palavra do comando
        const relevantFields = tableContext.filter(field => {
            if (!field.description) return false;
            
            const descriptionWords = field.description.toLowerCase().split(/\s+/);
            
            // Verifica se alguma palavra da description corresponde a alguma palavra do comando
            return descriptionWords.some(descWord => 
                userCommandWords.includes(descWord)
            );
        });

        // Se não encontrou nenhum campo com description correspondente, retorna os campos que têm description não nula
        if (relevantFields.length === 0) {
            return tableContext.filter(field => field.description !== null && field.description !== undefined);
        }

        return relevantFields;
    } catch (e) {
        console.error('Error filtering relevant fields:', e);
        return tableContext.slice(0, 3); // Retorna os 3 primeiros em caso de erro
    }
};

  const buildPrompt = (userCommand, tableContext) => {
    const relevantContext = filterRelevantFields(userCommand, tableContext);
    
    return `
      [INST]
          <<SYS>>
              Você é um conversor estrito de comandos para JSON. Responda SOMENTE com o JSON especificado abaixo, sem comentários.

              CONTEXTO DA TABELA: ${cleanAndTransformData(relevantContext)}

              COMANDO DO USUÁRIO: ${userCommand}

              FORMATO DE RESPOSTA EXATO (apenas JSON) - TODOS OS CAMPOS DEVEM SER INCLUÍDOS MESMO QUE VAZIOS:
                  {
                      "ok": true,
                      "data": {
                          "select": -1,
                          "filters": [],
                          "aggregation": {},
                          "sorting": [],
                          "grouping": [],
                          "pivoting": {},
                          "conversationId": "2q3WtwkrWLPqHPKou6tBzdYi6aUOUwSX"
                      }
                  }

              REGRAS IMPORTANTES:
                  1. Todos os campos devem ser incluídos na resposta, mesmo que vazios
                  2. "filter" deve ser sempre um array (pode ser vazio)
                    - precisa ter o nome de 'filter' o objeto pai e ter um array de 'items'
                    - precisa conter o field "operator": "and", dentro do objeto filter e dentro de cada item
                    - sempre que tiver item, precisa ter os campos: field, operator, value
                    - Para field do type number: ["=", "!=", ">", ">=", "<", "<=", "isEmpty", "isNotEmpty", "isAnyOf"]
                    - Para field do type string: ["contains", "doesNotContain", "equals", "doesNotEqual", "startsWith", "endsWith", "isEmpty", "isNotEmpty", "isAnyOf"]
                    - Para field do type boolean/custom: ["is"]
                  3. "sorting" deve ser sempre um array de objetos com "column" e "sort" (pode ser vazio)
                    - "direction" deve ser "desc" se o comando mencionar "decrescente" ou "desc", caso contrário "asc"
                    - Campo deve ser referido como "field" (não "column")
                  4. "grouping" deve ser sempre um array (pode ser vazio)
                    - apenas o campo em string
                  5. "aggregation" e "pivoting" devem ser sempre objetos (podem ser vazios)
                  6. "filterOperator" deve ser sempre incluído com valor padrão "and"
                  7. Use apenas os campos listados no contexto
                  8. Se não entender, retorne:
                      {
                          "ok": false,
                          "message": "Não entendi o comando"
                      }
                  9. Para agregações, use apenas funções válidas: "size", "sum", "avg", "max", "min", "count"
                  10. Para pinnedColumns, mantenha a estrutura { "right": [], "left": [] }
                  11. Em "columns", inclua SOMENTE campos existentes no contexto

                  EXEMPLO DE SAÍDA CORRETA:
                    {
                      "sorting": [
                        {
                          "field": "operation",
                          "sort": "asc"
                        }
                      ],
                      "columnWidth": [
                        {
                          "field": "start_date",
                          "width": 100
                        },
                        {
                          "field": "end_date",
                          "width": 100
                        }
                      ],
                      "filter": {
                        "operator": "and",
                        "items": [
                          {
                            "field": "class_code",
                            "operator": "contains",
                            "value": "asd"
                          }
                        ]
                      },
                      "pinnedColumns": {
                        "right": ["description"],
                        "left": ["code"]
                      },
                      "grouping": ["code", "acc_date"],
                      "aggregation": {
                        "description": "size",
                        "acc_date": "size"
                      },
                      "columns": {
                        "description": true,
                        "category": false
                      }
                    }
          <</SYS>>
      [/INST]
  `};

  app.post('/api/chat', async (req, res) => {
      try {
          const { query, context: tableContext, conversationId } = req.body;
          const userCommand = query.trim().toLowerCase();
          
          const fullPrompt = buildPrompt(userCommand, tableContext);

          console.log('fullPrompt', fullPrompt)
          const response = await session.prompt(fullPrompt);

          console.log('response', response)
          
          const jsonStart = response.indexOf('{');
          const jsonEnd = response.lastIndexOf('}') + 1;
          const jsonString = response.slice(jsonStart, jsonEnd);

          console.log('jsonString', jsonString)
          
          try {
              const result = JSON.parse(jsonString);

          console.log('result', result)
          // console.log('2222', ...result)
          // console.log('333333', ...result.data)

              const newConversationId = conversationId || generateConversationId();
              const completeResponse = {
                  ok: true,
                  data: {
                      select: -1,
                      filters: [],
                      aggregation: {},
                      sorting: [],
                      grouping: [],
                      pivoting: {},
                      ...result?.data,
                      conversationId: newConversationId,
                  }
              };

              res.json(completeResponse);
          } catch (e) {
              res.json({
                  ok: false,
                  message: "Não entendi o comando",
                  debug: {
                      rawResponse: response,
                      error: e.message
                  }
              });
          }
      } catch (error) {
          res.status(500).json({
              ok: false,
              error: "Erro no servidor",
              details: error.message
          });
      }
  });

  app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
