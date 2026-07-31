document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formulario");
    const mensagem = document.getElementById("mensagem");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();

        if (nome === "" || email === "") {
            mensagem.textContent = "Preencha todos os campos.";
            mensagem.style.color = "red";
        } else {
            mensagem.textContent = "Mensagem enviada com sucesso!";
            mensagem.style.color = "green";

            formulario.reset();
        }
    });

});