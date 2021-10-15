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

console.log(cliente.saldo);
cliente.depositar(100)
console.log(cliente.saldo);