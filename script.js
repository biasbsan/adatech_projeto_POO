class Cliente {
  // TODO: validar o nome do cliente 
  // TODO: validar o cpf  
  constructor(nome, cpf) {
    this.nome = nome;
    this.cpf = cpf;
  }
  
}

class Conta {
  //TODO: validar se o saldo é zero ou maior que zero
    constructor(cliente, saldo = 0) {
      this.cliente = cliente;
        this.saldo = saldo;
        this.historico = [];
  }
  
  //TODO: validar valor maior que zero
    depositar(valor) {
        this.saldo += valor;
        this.historico.push(`Depósito de R$ ${valor}`);
    }

  //TODO: retornar erro específico se o valor for zero
  //TODO: não deixar sacar se o valor for negativo
    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            this.historico.push(`Saque de R$ ${valor}`);
        } else {
            console.log("Saldo insuficiente.");
        }
    }
//TODO: criar feature de transferência (conta corrente só transfere pra conta corrente, conta poupança só recebe transferência do titular)
    obterExtrato() {
        return this.historico;
    }

    limparHistorico() {
        this.historico = [];
  }
  
  exibirSaldo() {
    console.log(`O saldo da conta é: R$ ${this.saldo}`)
  }
  
  exibirDados() {
    console.log(`Nome: ${this.cliente.nome}, CPF: ${this.cliente.cpf}`)
  }
}


class ContaCorrente extends Conta {
  constructor(cliente, saldo, conta_id) {
    super(cliente, saldo);
    this.conta_id = conta_id;
  }
  
  exibirDados() {
    console.log(`Nome: ${this.cliente.nome}, CPF: ${this.cliente.cpf}, conta corrente: ${this.conta_id}`)
  }
}

class ContaPoupanca extends Conta {
    constructor(cliente, saldo) {
        super(cliente, saldo);
    }
}

//testes:

// cliente = new Cliente("Bianca", "12356721376")
// contaCorrente = new ContaCorrente(cliente, 0, 123)
// contaCorrente.exibirSaldo()
// contaCorrente.exibirDados()
// contaCorrente.depositar(100) 
// contaCorrente.exibirSaldo()
// contaCorrente.sacar(50)
// contaCorrente.exibirSaldo()
// historico = contaCorrente.obterExtrato()
// console.log(historico)