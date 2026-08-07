//Classe - modelo para criar objetos
class Carro {

    //Atributos (características)
    //Método construtor - método especial para criar objetos
    constructor(marca, modelo, ano, cor) {

        //This - referência para o objeto que está sendo criado
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    //Métodos (ações)
    ligar() {
        console.log(`${this.modelo} ligou`);
    }

    acelerar() {
        console.log(`${this.modelo} acelerou`);
    }

    frear() {
        console.log(`${this.modelo} freiou`);
    }

}

//Criando objetos a partir da classe Carro
const carro1 = new Carro("Volkswagen", "Gol", 2022, "Branco");
console.log("Carro1:", carro1);

const carro2 = new Carro("Toyota", "Corolla", 2025, "Preto");
console.log("Carro2:", carro2);

const carro3 = new Carro("Honda", "Civic", 2023, "Prata");
console.log("Carro3:", carro3);

console.log("-------------------------------");
console.log("Atributos do carro 1: ");
console.log("- ", carro1.marca);
console.log("- ", carro1.modelo);
console.log("- ", carro1.ano);
console.log("- ", carro1.cor);
console.log("-------------------------------");

console.log("Atributos do carro 2: ");
console.log("- ", carro2.marca);
console.log("- ", carro2.modelo);
console.log("- ", carro2.ano);
console.log("- ", carro2.cor);
console.log("-------------------------------");

console.log("Atributos do carro 3: ");
console.log("- ", carro3.marca);
console.log("- ", carro3.modelo);
console.log("- ", carro3.ano);
console.log("- ", carro3.cor);
console.log("-------------------------------");

carro1.ligar();
carro1.acelerar();
carro1.frear();