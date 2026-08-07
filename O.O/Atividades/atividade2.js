//Objeto: Aluno
// Atributos: nome, idade, curso, matricula
// Métodos: aprender(), estudar(), apresentar()

// Classe é o modelo do objeto, é a planta do objeto.
class Aluno {
    constructor(nome, idade, curso, matricula) {    
        //Atributos
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }

    //Métodos (Ações)
    aprender() {
        console.log(`${this.nome} está aprendendo.`);
    }   

    estudar() {
        console.log(`${this.nome} está estudando.`);
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, curso ${this.curso} e minha matrícula é ${this.matricula}.`);
    }
}

const aluno1 = new Aluno("Cauê", 17, "D.S", "12345");
console.log("Aluno 1:", aluno1);

const aluno2 = new Aluno("Marcelo", 17, "Engenharia", "67890");
console.log("Aluno 2:", aluno2);

const aluno3 = new Aluno("Leo", 17, "Administração", "54321");
console.log("Aluno 3:", aluno3);

console.log("---------------------------------");
console.log("Atributos do Aluno 1:");
console.log("- Nome:", aluno1.nome);
console.log("- Idade:", aluno1.idade);
console.log("- Curso:", aluno1.curso);
console.log("- Matrícula:", aluno1.matricula);
console.log("---------------------------------");

console.log("Atributos do Aluno 2:");
console.log("- Nome:", aluno2.nome);
console.log("- Idade:", aluno2.idade);
console.log("- Curso:", aluno2.curso);
console.log("- Matrícula:", aluno2.matricula);
console.log("---------------------------------");

console.log("Atributos do Aluno 3:");
console.log("- Nome:", aluno3.nome);
console.log("- Idade:", aluno3.idade);
console.log("- Curso:", aluno3.curso);
console.log("- Matrícula:", aluno3.matricula);
console.log("---------------------------------");

aluno1.aprender();
aluno1.estudar();
aluno1.apresentar();

console.log("---------------------------------");

aluno2.aprender();
aluno2.estudar();
aluno2.apresentar();

console.log("---------------------------------");

aluno3.aprender();
aluno3.estudar();
aluno3.apresentar();
