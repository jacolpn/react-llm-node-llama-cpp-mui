# CONTEXT MUI removed "/"
```
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
            "items": [
                {
                    "field": "class_code",
                    "operator": "contains",
                    "value": "asd"
                }
            ]
        },
        "pinnedColumns": {
            "right": [
                "description"
            ],
            "left": [
                "code"
            ]
        },
        "grouping": [
            "code",
            "acc_date"
        ],
        "aggregation": {
            "description": "size",
            "acc_date": "size"
        },
        "columns": {
            "description": true,
            "category": false
        }
    }



    [
    {
        "field": "__check__",
        "description": null,
        "examples": [
        false,
        false,
        false,
        false,
        false
        ],
        "type": "custom",
        "allowedOperators": [
        "is"
        ]
    },
    {
        "field": "code",
        "description": null,
        "examples": [
        "1000294",
        "1000297",
        "1000296",
        "1000296",
        "1000297"
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "description",
        "description": null,
        "examples": [
        "teste encargo",
        "teste enc",
        "teste encargo",
        "teste",
        "teste enc"
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "category",
        "description": null,
        "examples": [
        "Mútuo",
        "Mútuo",
        "Mútuo",
        "Mútuo",
        "Mútuo"
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "operation",
        "description": null,
        "examples": [
        "MUTUOEMPRE",
        "MUTUO PRICE",
        "MUTUOCONTA",
        "MUTUOEMPRE",
        "MUTUOCONTA"
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "class_code",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "bukrs",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "bukrs_description",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "bukrs_d",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "bukrs_e",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "bukrs_ed",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "waers",
        "description": null,
        "examples": [
        "BRL",
        "BRL",
        "BRL",
        "BRL",
        "BRL"
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "waers_p",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "waers_trans",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "waers_trans_p",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "waers_type",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "hbkid",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "hbkid_description",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "hbkid_e",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "calc_dt",
        "description": null,
        "examples": [
        "2024-08-23T11:38:55.046Z",
        "2024-08-23T11:38:55.046Z",
        "2024-08-22T23:54:30.280Z",
        "2024-08-23T11:38:55.046Z",
        "2024-08-22T23:51:30.604Z"
        ],
        "type": "string",
        "allowedOperators": [
        "is",
        "not",
        "after",
        "onOrAfter",
        "before",
        "onOrBefore",
        "isEmpty",
        "isNotEmpty"
        ]
    },
    {
        "field": "sign_date",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "is",
        "not",
        "after",
        "onOrAfter",
        "before",
        "onOrBefore",
        "isEmpty",
        "isNotEmpty"
        ]
    },
    {
        "field": "start_date",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "is",
        "not",
        "after",
        "onOrAfter",
        "before",
        "onOrBefore",
        "isEmpty",
        "isNotEmpty"
        ]
    },
    {
        "field": "end_date",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "is",
        "not",
        "after",
        "onOrAfter",
        "before",
        "onOrBefore",
        "isEmpty",
        "isNotEmpty"
        ]
    },
    {
        "field": "status",
        "description": null,
        "examples": [
        "Aberto",
        "Aberto",
        "Aberto",
        "Aberto",
        "Aberto"
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "cntr_value",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "number",
        "allowedOperators": [
        "=",
        "!=",
        ">",
        ">=",
        "<",
        "<=",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "comp_value",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "number",
        "allowedOperators": [
        "=",
        "!=",
        ">",
        ">=",
        "<",
        "<=",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "quota_disb",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "quot_displ",
        "description": null,
        "examples": [
        -1,
        -1,
        -1,
        -1,
        -1
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "quot_displ_p",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "quot_displ_b",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "quot_displ_bp",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "start_exrate",
        "description": null,
        "examples": [
        1,
        1,
        1,
        1,
        1
        ],
        "type": "number",
        "allowedOperators": [
        "=",
        "!=",
        ">",
        ">=",
        "<",
        "<=",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "start_exrate_p",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "number",
        "allowedOperators": [
        "=",
        "!=",
        ">",
        ">=",
        "<",
        "<=",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "start_amort",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "is",
        "not",
        "after",
        "onOrAfter",
        "before",
        "onOrBefore",
        "isEmpty",
        "isNotEmpty"
        ]
    },
    {
        "field": "pay_ocurr",
        "description": null,
        "examples": [
        1,
        1,
        1,
        1,
        1
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "pay_unit",
        "description": null,
        "examples": [
        "MON",
        "MON",
        "MON",
        "MON",
        "MON"
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "due_prog",
        "description": null,
        "examples": [
        "CAL",
        "CAL",
        "CAL",
        "CAL",
        "CAL"
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "grace_period",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "deadline",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "anniversary",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "layout_code",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "id_acclayout_d",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "acc_date",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "is",
        "not",
        "after",
        "onOrAfter",
        "before",
        "onOrBefore",
        "isEmpty",
        "isNotEmpty"
        ]
    },
    {
        "field": "residual_type",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "residual_value",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "number",
        "allowedOperators": [
        "=",
        "!=",
        ">",
        ">=",
        "<",
        "<=",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "liq_paym",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "liq_type",
        "description": null,
        "examples": [
        "ALL",
        "ALL",
        "ALL",
        "ALL",
        "ALL"
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "installment",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "number",
        "allowedOperators": [
        "=",
        "!=",
        ">",
        ">=",
        "<",
        "<=",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "options_type",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "options",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "eoptions_type",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "eoptions",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "estart_exrate_p",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "risk",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "cntr_wfw",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "cntr_wff",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "start_rate",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "is",
        "not",
        "after",
        "onOrAfter",
        "before",
        "onOrBefore",
        "isEmpty",
        "isNotEmpty"
        ]
    },
    {
        "field": "end_rate",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "start_rate_p",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "is",
        "not",
        "after",
        "onOrAfter",
        "before",
        "onOrBefore",
        "isEmpty",
        "isNotEmpty"
        ]
    },
    {
        "field": "end_rate_p",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "reference_01",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "reference_02",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "reference_03",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "reference_04",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "reference_05",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "reference_06",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "cntr_orig",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "kostl",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "lifnr",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "lifnr_orig",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "kunnr",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "gsber",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "anln1",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "anln2",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "nrsap",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "projk",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "recip",
        "description": null,
        "examples": [
        "",
        "",
        "",
        "",
        ""
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "liqdy",
        "description": null,
        "examples": [
        "",
        "",
        "",
        "",
        ""
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "hkont",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "hkone",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "businessplace",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "prctr",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "commodity",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "exchange",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "market",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "amount",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "number",
        "allowedOperators": [
        "=",
        "!=",
        ">",
        ">=",
        "<",
        "<=",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "aufnr",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "fold_type",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "barr_type",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "calc_tm",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "start_daily",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "daily",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "po_number",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "po_item",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "grupp",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "ebene",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "head",
        "description": null,
        "examples": [
        "",
        "",
        "",
        "",
        ""
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "material",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "materia2",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    },
    {
        "field": "vbund",
        "description": null,
        "examples": [
        null,
        null,
        null,
        null,
        null
        ],
        "type": "string",
        "allowedOperators": [
        "contains",
        "doesNotContain",
        "equals",
        "doesNotEqual",
        "startsWith",
        "endsWith",
        "isEmpty",
        "isNotEmpty",
        "isAnyOf"
        ]
    }
    ]
```

# Example filter object filled
```
    {
        "columnWidth": [
            {
                "field": "__check__",
                "width": 50
            },
            {
                "field": "code",
                "width": 100
            },
            {
                "field": "description",
                "width": 100
            },
            {
                "field": "category",
                "width": 100
            },
            {
                "field": "operation",
                "width": 100
            }
        ],
        "filter": {
            "items": [],
            "logicOperator": "and",
            "quickFilterValues": []
        },
        "pinnedColumns": {},
        "grouping": [],
        "aggregation": {},
        "columns": {
            "__check__": true,
            "code": true,
            "materia2": true,
            "vbund": true
        },
        "sorting": [
            {
                "field": "description",
                "sort": "asc"
            }
        ]
    }


    {
        "select": -1,
        "filters": [],
        "aggregation": {},
        "sorting": [
            {
                "field": "description",
                "sort": "asc"
            }
        ],
        "grouping": [],
        "pivoting": {},
        "columns": {
            "description": true
        },
        "conversationId": "3IL4iDA47eCvrrt26CCx6SknwJa2LwpO"
    }
```

# Example operators
```
    "type": "number",
    "allowedOperators": [
    "=",
    "!=",
    ">",
    ">=",
    "<",
    "<=",
    "isEmpty",
    "isNotEmpty",
    "isAnyOf"
    ]
    "examples": [
    1,
    -1,
    ],

    "type": "string",
    "allowedOperators": [
    "contains",
    "doesNotContain",
    "equals",
    "doesNotEqual",
    "startsWith",
    "endsWith",
    "isEmpty",
    "isNotEmpty",
    "isAnyOf"
    ]
    "examples": [
    "ASD",
    ],

    "type": "custom",
    "allowedOperators": [
    "is"
    ]

    "type": "boolean",
    "allowedOperators": [
    "is"
    ]
    "examples": [
    false,
    true,
    ],
```
