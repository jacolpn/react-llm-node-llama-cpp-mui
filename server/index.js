import express from 'express';
import cors from 'cors';
import { LlamaModel, LlamaContext, LlamaChatSession } from 'node-llama-cpp';

const PORT = 3001;

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

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

const buildPrompt = (userCommand, tableContext) => `
    [INST]
        <<SYS>>
            Você é um conversor estrito de comandos para JSON. Responda SOMENTE com o JSON especificado abaixo, sem comentários.

            CONTEXTO DA TABELA: ${tableContext}

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
                2. "filters" deve ser sempre um array (pode ser vazio)
                3. "sorting" deve ser sempre um array de objetos com "column" e "direction" (pode ser vazio)
                4. "grouping" deve ser sempre um array (pode ser vazio)
                5. "aggregation" e "pivoting" devem ser sempre objetos (podem ser vazios)
                6. "filterOperator" deve ser sempre incluído com valor padrão "and"
                7. Use apenas os campos listados no contexto
                8. "direction" deve ser "desc" se o comando mencionar "decrescente" ou "desc", caso contrário "asc"
                9. Se não entender, retorne:
                    {
                        "ok": false,
                        "message": "Não entendi o comando"
                    }
                10. NUNCA omita qualquer campo do formato de resposta, mesmo que não seja usado
                11. No array "sorting", use "column" em vez de "field" para especificar a coluna de ordenação
        <</SYS>>
    [/INST]
`;

app.post('/api/chat', async (req, res) => {
    try {
        const { query, context: tableContext, conversationId } = req.body;
        const userCommand = query.trim().toLowerCase();
        
        const fullPrompt = buildPrompt(userCommand, tableContext);
        const response = await session.prompt(fullPrompt);
        
        const jsonStart = response.indexOf('{');
        const jsonEnd = response.lastIndexOf('}') + 1;
        const jsonString = response.slice(jsonStart, jsonEnd);
        
        try {
            const result = JSON.parse(jsonString);
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
                    ...result.data,
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
