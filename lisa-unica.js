const cliente = {
    'nome': 'Rodrigo',
    'idade': 23,
    'cpf': '123.457.457-47',
    'email': 'rodrigo@rodrigo.com',
    'fone': ['123456', '1011987'],
    'dependentes': [
        {
            'nome': 'Sara',
            'idade': '07',
            'parentesco': 'Filha',
        },
        {
            'nome': 'João',
            'idade': '05',
            'parentesco': 'Filho',
        }
    ],
    'saldo': 100,
    'depositar': function (valor) {
        this.saldo += valor
    }
}

const clientes = [
    {
        'nome': 'Rodrigo',
        'idade': 23,
        'cpf': '123.457.457-47',
        'email': 'rodrigo@rodrigo.com',
        'fone': ['123456', '1011987'],
        'dependentes': [
            {
                'nome': 'Sara',
                'idade': '07',
                'parentesco': 'Filha',
            },
            {
                'nome': 'João',
                'idade': '05',
                'parentesco': 'Filho',
            }
        ]
    },
    {
        'nome': 'André',
        'idade': 30,
        'cpf': '124.458.458-48',
        'email': 'rodrigo@rodrigo.com',
        'fone': ['45457878', '7878787878'],
        'dependentes': [
            {
                'nome': 'Julio',
                'idade': '07',
                'parentesco': 'Filho',
            },
            {
                'nome': 'Maria',
                'idade': '05',
                'parentesco': 'Filha',
            }
        ]
    }
]