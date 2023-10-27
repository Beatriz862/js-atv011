
class ContaBancaria {
    constructor(agencia, numero, tipo, saldo, graficos) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;
        this.graficos = graficos;
    }
    getSaldo() {
        return this.saldo;
    }

    setSaldo(novoSaldo) {
        this.saldo = novoSaldo;
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }

   
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            return true;
        }
        return false;

    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito, saldo) {
        super(agencia, numero, "Conta Corrente", saldo);
        this.cartaoCredito = cartaoCredito;
    }

    getCartaoCredito() {
        return this.cartaoCredito;
    }

    setCartaoCredito(novoCartaoCredito) {
        this.cartaoCredito = novoCartaoCredito;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, "Conta Poupança", saldo);
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, "Conta Universitária", saldo);
    }
    sacar(valor) {
        if (valor <= 500 && valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }
}
function inserirConta() {
    const agencia = document.getElementById("agencia").value;
    const numero = document.getElementById("numero").value;
    const tipo = document.getElementById("tipo").value;
    const saldo = parseFloat(document.getElementById("saldo").value);

    let novaConta;

    switch (tipo) {
        case "corrente":
            const cartaoCredito = document.getElementById("cartaoCredito").value;
            novaConta = new ContaCorrente(agencia, numero, cartaoCredito, saldo);
            break;
        case "poupanca":
            novaConta = new ContaPoupanca(agencia, numero, saldo);
            break;
        case "universitaria":
            novaConta = new ContaUniversitaria(agencia, numero, saldo);
            break;
        default:
            return;
    }

    contas.push(novaConta);
    alert("Conta inserida com sucesso!");
}
function visualizarContas() {
    const listaContas = document.getElementById("lista-contas");
    listaContas.innerHTML = "";

    for (const conta of contas) {
        const li = document.createElement("li");
        li.textContent = `Agência: ${conta.agencia}, Número: ${conta.numero}, Tipo: ${conta.tipo}, Saldo: ${conta.saldo}`;
        listaContas.appendChild(li);
    }
}
function deletarConta() {
    const index = document.getElementById("conta-a-deletar").selectedIndex;
    if (index !== -1) {
        contas.splice(index, 1);
        alert("Conta deletada com sucesso!");
    }
}

const contas = [];

