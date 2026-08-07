//Objeto: Tenis
// Atributos: nome, preco, estoque
//Metodos: vender(), repor(), alterarPreco()

class Tenis {
    constructor(nome, preco, estoque) {
        //Atributos
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    //Métodos (Ações)
    vender() {
        console.log(`O tênis ${this.nome} foi vendido.`);
    }

    repor() {
        console.log(`O estoque do tênis ${this.nome} foi reposto.`);
    }

    alterar() {
        console.log(`O preço do tênis ${this.nome} foi alterado para R$${this.preco}.`);
    }
}

const tenis1 = new Tenis("Nike Air Force", 799.99, 10);
console.log("Tênis 1:", tenis1);

const tenis2 = new Tenis("Nike Jordan 3", 999.99, 5);
console.log("Tênis 2:", tenis2);

const tenis3 = new Tenis("Ascis NYC GEL", 599.99, 8);
console.log("Tênis 3:", tenis3);

console.log("---------------------------------");
console.log("Atributos do Tênis 1:");
console.log("- Nome:", tenis1.nome);
console.log("- Preço:", tenis1.preco);
console.log("- Estoque:", tenis1.estoque);
console.log("---------------------------------");

console.log("Atributos do Tênis 2:");
console.log("- Nome:", tenis2.nome);
console.log("- Preço:", tenis2.preco);
console.log("- Estoque:", tenis2.estoque);
console.log("---------------------------------");

console.log("Atributos do Tênis 3:");
console.log("- Nome:", tenis3.nome);
console.log("- Preço:", tenis3.preco);
console.log("- Estoque:", tenis3.estoque);
console.log("---------------------------------");

tenis1.vender();
tenis1.repor();
tenis1.alterar();

console.log("---------------------------------");

tenis2.vender();
tenis2.repor();
tenis2.alterar();

console.log("---------------------------------");

tenis3.vender();
tenis3.repor();
tenis3.alterar();