class Produto {
    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        const precoComDesconto = this.preco - (this.preco * this.desconto / 100);

        return precoComDesconto;
    }

    exibirNaTela() {
        const resultado = document.querySelector('#resultado');

        resultado.innerHTML = '';

        produtos.forEach((produto, indice) => {
            const precoFinal = produto.aplicarDesconto();

            resultado.innerHTML += `
                <div>
                    <p>Nome: ${produto.nome}</p>
                    <p>Preço original: R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
                    <p>Categoria: ${produto.categoria}</p>
                    <p>Desconto: ${produto.desconto}%</p>
                    <p>Preço com desconto: R$ ${precoFinal.toFixed(2).replace('.', ',')}</p>
                    <button onclick="excluirProduto(${indice})">Excluir</button>
                    <hr>
                </div>
            `;
        });
    }
}

const produtosSalvos = JSON.parse(localStorage.getItem('produtos')) || [];

const produtos = produtosSalvos.map(produtoSalvo => {
    return new Produto(
        produtoSalvo.nome,
        produtoSalvo.preco,
        produtoSalvo.categoria,
        produtoSalvo.desconto
    );
});

const nome = document.querySelector('#nome');
const preco = document.querySelector('#preco');
const categoria = document.querySelector('#categoria');
const desconto = document.querySelector('#desconto');
const botaocadastrar = document.querySelector('#botaocadastrar');
const resultado = document.querySelector('#resultado');

function salvarProdutos() {
    localStorage.setItem('produtos', JSON.stringify(produtos));
}

function atualizarTela() {
    if (produtos.length > 0) {
        produtos[0].exibirNaTela();
    } else {
        resultado.innerHTML = '';
    }
}

function excluirProduto(indice) {
    produtos.splice(indice, 1);
    salvarProdutos();
    atualizarTela();
}

botaocadastrar.addEventListener('click', function() {
    const produto = new Produto(
        nome.value,
        Number(preco.value),
        categoria.value,
        Number(desconto.value)
    );

    produtos.push(produto);
    salvarProdutos();

    console.log(produtos);
    produto.exibirNaTela();

    nome.value = '';
    preco.value = '';
    categoria.value = '';
    desconto.value = '';
});

atualizarTela();