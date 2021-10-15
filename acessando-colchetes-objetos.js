const cliente = {
    'nome': 'Rodrigo', 
    'idade': 23, 
    'cpf': '123.457.457-47', 
    'email': 'rodrigo@rodrigo.com'
}

const chaves = ['nome', 'idade', 'cpf', 'email', 'conta']

chaves.forEach(element => {
    if (cliente[element] == undefined) {
        console.log('Chave não encontrada!');
    }else{
        console.log(element,':', cliente[element]);
    }
});