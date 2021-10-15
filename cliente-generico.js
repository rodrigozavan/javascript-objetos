function cliente(nome, cpf,email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

const rodrigo = new cliente('Rodrigo', '123456789', 'rodrigo@rodrigo.com', 100)
console.log(rodrigo)