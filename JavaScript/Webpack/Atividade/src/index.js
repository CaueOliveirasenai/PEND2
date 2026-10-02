import saudacao from './saudacao.js';

let nome = "Cauê";

const mensagem = saudacao(nome);

document.getElementById('mensagem').innerText = mensagem;