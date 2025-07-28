import express from 'express';
import cors from 'cors';
import { LlamaModel, LlamaContext, LlamaChatSession } from 'node-llama-cpp';

const app = express();
app.use(cors());
app.use(express.json());

const model = new LlamaModel({
    modelPath: '../models/mistral-7b-instruct-v0.2.Q3_K_S.gguf'
});
const context = new LlamaContext({ model });
const session = new LlamaChatSession({ 
    context,
    temperature: 0.1,
    maxTokens: 200
});

const buildPrompt = (userCommand) => `
    [INST]
        <<SYS>>
            Você é um conversor estrito de comandos para JSON. Responda SOMENTE com o JSON especificado abaixo, sem comentários.

            CONTEXTO DA TABELA: [{\"field\":\"__check__\",\"description\":null,\"examples\":[false],\"type\":\"custom\",\"allowedOperators\":[\"is\"]},{\"field\":\"code\",\"description\":null,\"examples\":[\"XP\"],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"name\",\"description\":null,\"examples\":[\"XP Investimento\"],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"external_code\",\"description\":null,\"examples\":[\"XP\"],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"document\",\"description\":null,\"examples\":[\"02332886000104\"],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"tax_id\",\"description\":null,\"examples\":[\"\"],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"currency_code\",\"description\":null,\"examples\":[\"BRL\"],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"cost_center_plan_code\",\"description\":null,\"examples\":[\"\"],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"accounting_account_plan_code\",\"description\":null,\"examples\":[\"\"],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"profit_center_plan_code\",\"description\":null,\"examples\":[\"\"],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"division_plan_code\",\"description\":null,\"examples\":[\"\"],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"calendar_code\",\"description\":null,\"examples\":[\"\"],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"zipcode\",\"description\":null,\"examples\":[null],\"type\":\"number\",\"allowedOperators\":[\"=\",\"!=\",\">\",\">=\",\"<\",\"<=\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"state\",\"description\":null,\"examples\":[null],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"city\",\"description\":null,\"examples\":[null],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"neighborhood\",\"description\":null,\"examples\":[null],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"street\",\"description\":null,\"examples\":[null],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"number\",\"description\":null,\"examples\":[null],\"type\":\"number\",\"allowedOperators\":[\"=\",\"!=\",\">\",\">=\",\"<\",\"<=\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"complement\",\"description\":null,\"examples\":[null],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]}]

            COMANDO DO USUÁRIO: ${userCommand}

            FORMATO DE RESPOSTA EXATO (apenas JSON):
                {
                    "ok": true,
                    "data": {
                        "select": -1,
                        "filters": [
                            {
                                "operator": "equals",
                                "value": "XP",
                                "column": "code"
                            }
                        ],
                        "filterOperator": "and",
                        "aggregation": {},
                        "sorting": [
                            {
                                "column": "external_code",
                                "direction": "asc"
                            }
                        ],
                        "grouping": [
                            {
                                "column": "name"
                            }
                        ],
                        "pivoting": {},
                        "conversationId": "FR79W5--GO_tdak6m5CnJ1m2N3gFQLey"
                    }
                }

            REGRAS:
                1. Use apenas os campos listados no contexto (se houver)
                2. "direction" deve ser "desc" se o comando mencionar "decrescente" ou "desc", caso contrário "asc"
                3. Se não entender, retorne:
                    {
                        "ok": false,
                        "message": "Não entendi o comando"
                    }
        <</SYS>>
    [/INST]
`;

app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;
        const userCommand = message.trim().toLowerCase();
        
        const fullPrompt = buildPrompt(userCommand);
        const response = await session.prompt(fullPrompt);
        
        const jsonStart = response.indexOf('{');
        const jsonEnd = response.lastIndexOf('}') + 1;
        const jsonString = response.slice(jsonStart, jsonEnd);
        
        try {
            const result = JSON.parse(jsonString);
            res.json(result);
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

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
