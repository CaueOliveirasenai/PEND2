
const nome = document.querySelector('#nome');
const botaosalvar = document.querySelector('#salvar');
const botaoRecuperar = document.querySelector('#recuperar');
const botaoexcluir = document.querySelector('#excluir');

const resultado = document.querySelector('#resultado');

//SALVAR
botaosalvar.addEventListener('click', function() {
   

    localStorage.setItem('nome', nome.value);
    
    resultado.textContent = "Nome salvo!";

});

//RECUPERAR
botaoRecuperar.addEventListener('click', function() {
    const nomeRecuperado = localStorage.getItem('nome');

    resultado.textContent = `Nome armazenado/recuperado: ${nomeRecuperado}`;
});

//EXCLUIR
botaoexcluir.addEventListener('click', function() {
    localStorage.removeItem('nome');

    resultado.textContent = "Nome excluído!";
});