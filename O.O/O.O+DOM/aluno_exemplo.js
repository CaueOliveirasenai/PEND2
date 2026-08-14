class Aluno {
    constructor(nome, idade, curso, matricula) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }

    estudar() {
        console.log(`${this.nome} está estudando.`);
    }

    apresentar() {
        console.log(`${this.nome} está fazendo uma ótima apresentação.`);
    }

    exibirNaTela() {
        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = `
        <p>Nome: ${this.nome}</p>
        <p>Idade: ${this.idade}</p>
        <p>Curso: ${this.curso}</p>
        <p>Matrícula: ${this.matricula}</p>
    `;
    }
}


const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const curso = document.querySelector("#curso");
const matricula = document.querySelector("#matricula");
const botaoCadastrar = document.querySelector("#botaocadastrar");



botaoCadastrar.addEventListener("click", function() {

    resultado.textContent = nome.value;

    const aluno = new Aluno(nome.value, idade.value, curso.value, matricula.value);
    alunos.push(aluno);

    aluno.estudar();
    aluno.apresentar();
    aluno.exibirNaTela();

});

