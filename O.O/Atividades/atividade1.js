//Objeto: Retângulo
// Atributos: base, altura, cor
// Métodos: calcularArea(), calcularPerimetro(), exibirInformacoes()


// Classe é o modelo do objeto, é a planta do objeto.
class Retangulo {
    constructor(base, altura, cor) {

        // Atributos
        this.base = base;
        this.altura = altura;
        this.cor = cor;
    }

    // Métodos (Ações)

    calcularArea() {
        console.log(`Área: ${this.base * this.altura}`);
    }

    calcularPerimetro() {
        console.log(`Perímetro: ${2 * (this.base + this.altura)}`);
    }

    exibirInformacoes() {
        console.log(`Retângulo ${this.cor} - Base: ${this.base}, Altura: ${this.altura}}`);
    }
}

// Objetos
const retangulo1 = new Retangulo(10, 5, "Azul");
console.log("Retângulo 1:", retangulo1);

const retangulo2 = new Retangulo(8, 4, "Vermelho");
console.log("Retângulo 2:", retangulo2);

const retangulo3 = new Retangulo(15, 7, "Verde");
console.log("Retângulo 3:", retangulo3);

console.log("---------------------------------");
console.log("Atributos do Retângulo 1:");
console.log("- Base:", retangulo1.base);
console.log("- Altura:", retangulo1.altura);
console.log("- Cor:", retangulo1.cor);
console.log("---------------------------------");

console.log("Atributos do Retângulo 2:");
console.log("- Base:", retangulo2.base);
console.log("- Altura:", retangulo2.altura);
console.log("- Cor:", retangulo2.cor);
console.log("---------------------------------");

console.log("Atributos do Retângulo 3:");
console.log("- Base:", retangulo3.base);
console.log("- Altura:", retangulo3.altura);
console.log("- Cor:", retangulo3.cor);
console.log("---------------------------------");

// Chamando os métodos
retangulo1.exibirInformacoes();
retangulo1.calcularArea();
retangulo1.calcularPerimetro();