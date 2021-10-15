// const cliente = {
//     'nome': 'Rodrigo', 
//     'idade': 23, 
//     'cpf': '123.457.457-47', 
//     'email': 'rodrigo@rodrigo.com',
//     'fone': ['123456', '1011987']
// }

// cliente.fone.forEach(fone => console.log(fone))

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
}

cliente.dependentes.push(
    {'nome': 'Julio', 'idade': '08', 'parentesco': 'Filho'}
)


console.log(cliente.dependentes.filter(depentende => depentende.idade === "05")[0].nome);
