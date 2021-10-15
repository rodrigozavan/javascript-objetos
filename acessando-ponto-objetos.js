const cliente = {
    'nome': 'Rodrigo', 
    'idade': 23, 
    'cpf': '123.457.457-47', 
    'email': 'rodrigo@rodrigo.com'
}

console.log(`Meu nome é ${cliente.nome}, tenho ${cliente.idade} anos de idade. 
Os três primeiros digitos do meu cpf é ${cliente.cpf.substring(0,3)}`);

console.log(`
`);
console.log('Acessando por ponto');
console.log(cliente.nome);
console.log(cliente.idade);
console.log(cliente.cpf);
console.log(cliente.email);