# react-llm-node-llama-cpp-mui
- https://node-llama-cpp.withcat.ai/
- https://www.npmjs.com/package/node-llama-cpp

## Ideia de prompt:
Você é um assistente que converte comandos em JSON estruturado para operações em tabelas.
    CONTEXTO DA TABELA (campos disponíveis):
        - __check__ (custom): Sem descrição
        - code (string): Código
        - description (string): Descrição
        - external_code (string): Código Externo

    COMANDO DO USUÁRIO: "Ordenar por Descrição"

    FORMATO DE RESPOSTA EXATO (apenas JSON):
        {
            "ok": true,
            "data": {
            "sorting": [{
                "column": "nome_do_campo",
                "direction": "asc|desc"
            }],
            "filters": [],
            "conversationId": "id_aleatorio"
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
    
RESPONDA APENAS COM O JSON, SEM COMENTÁRIOS!

## Filtro feito pelo MUI

### PROMPT
ordernar por código externo; agrupar por nome; filtrar pelo código igual XP

### PAYLOAD ENVIADO
{
    "context": "[{\"field\":\"__check__\",\"description\":null,\"examples\":[false],\"type\":\"custom\",\"allowedOperators\":[\"is\"]},{\"field\":\"code\",\"description\":null,\"examples\":[\"XP\"],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"name\",\"description\":null,\"examples\":[\"XP Investimento\"],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"external_code\",\"description\":null,\"examples\":[\"XP\"],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"document\",\"description\":null,\"examples\":[\"02332886000104\"],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"tax_id\",\"description\":null,\"examples\":[\"\"],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"currency_code\",\"description\":null,\"examples\":[\"BRL\"],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"cost_center_plan_code\",\"description\":null,\"examples\":[\"\"],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"accounting_account_plan_code\",\"description\":null,\"examples\":[\"\"],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"profit_center_plan_code\",\"description\":null,\"examples\":[\"\"],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"division_plan_code\",\"description\":null,\"examples\":[\"\"],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"calendar_code\",\"description\":null,\"examples\":[\"\"],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"zipcode\",\"description\":null,\"examples\":[null],\"type\":\"number\",\"allowedOperators\":[\"=\",\"!=\",\">\",\">=\",\"<\",\"<=\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"state\",\"description\":null,\"examples\":[null],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"city\",\"description\":null,\"examples\":[null],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"neighborhood\",\"description\":null,\"examples\":[null],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"street\",\"description\":null,\"examples\":[null],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"number\",\"description\":null,\"examples\":[null],\"type\":\"number\",\"allowedOperators\":[\"=\",\"!=\",\">\",\">=\",\"<\",\"<=\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]},{\"field\":\"complement\",\"description\":null,\"examples\":[null],\"type\":\"string\",\"allowedOperators\":[\"contains\",\"doesNotContain\",\"equals\",\"doesNotEqual\",\"startsWith\",\"endsWith\",\"isEmpty\",\"isNotEmpty\",\"isAnyOf\"]}]",
    "query": "ordernar por código externo; agrupar por nome; filtrar pelo código igual XP",
    "additionalContext": "",
    "conversationId": "FR79W5--GO_tdak6m5CnJ1m2N3gFQLey"
}

### RESPOSTA:
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