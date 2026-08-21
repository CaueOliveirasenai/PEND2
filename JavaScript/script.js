class Produto {
    constructor(nome, preco, descricao, categoria) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.categoria = categoria;
    }

    aplicarDesconto() {
        const precoComDesconto = this.preco - (this.preco * (this.descricao / 100));
         this.preco = precoComDesconto;
    }

    exibir() {
        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = `
        <p>Nome: ${this.nome}</p>
        <p>Preço: R$${this.preco.toFixed(2)}</p>
        <p>Desconto: ${this.descricao}%</p>
        <p>Preço com Desconto: R$${this.preco.toFixed(2)}</p>
        <p>Categoria: ${this.categoria}</p>
    `;
    }

   
}


const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const descricao = document.querySelector("#descricao");
const categoria = document.querySelector("#categoria");
const botaoCadastrar = document.querySelector("#botaoCadastrar");

botaoCadastrar.addEventListener("click", function () {

    const produto = new Produto(nome.value, preco.value, descricao.value, categoria.value);
   
    produto.aplicarDesconto();
    localStorage.setItem("produto", JSON.stringify(produto));
    produto.exibir();
    
   
});

const dados = localStorage.getItem("produto");

if (dados) {

    const produtoSalvo = JSON.parse(dados);

    const produto = new Produto(
        produtoSalvo.nome,
        produtoSalvo.preco,
        produtoSalvo.categoria,
        produtoSalvo.aplicarDesconto
    );

    produto.exibir();
}