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

let relatorio = '';

for (const info in cliente) {
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue
    }
    relatorio += `chave: ${info}, valor: ${cliente[info]}\n`
}
console.log(relatorio);