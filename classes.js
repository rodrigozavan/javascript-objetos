class Pessoa{
    constructor(nome, sobrenome, cpf, email){
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
        this.email = email
    }
}

class Programador extends Pessoa{
    constructor(nome, sobrenome, cpf, email, linguagem){
        super(nome, sobrenome, cpf, email)
        this.linguagem = linguagem
    }
}

const rodrigo = new Programador('Rodrigo', 'Zavan', '454545454', 'rodrigo@rodrigo.com', 'Python')
console.log(rodrigo);