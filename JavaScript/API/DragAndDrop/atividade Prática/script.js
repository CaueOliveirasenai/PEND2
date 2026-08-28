let pontos = 0;
let pontosTela = document.getElementById("pontos");
let mensagem = document.getElementById("mensagem");
let carros = document.querySelectorAll(".carro");
let vagas = document.querySelectorAll(".vaga");



carros.forEach(function(carro) {

    carro.addEventListener("dragstart", function(event) {

        event.dataTransfer.setData(
            "text",
            carro.id
        );

    });

});

-

vagas.forEach(function(vaga) {

    vaga.addEventListener("dragover", function(event) {

        event.preventDefault();

    });



    vaga.addEventListener("drop", function(event) {

        event.preventDefault();



        let idCarro =
            event.dataTransfer.getData("text");

        // Descobre qual carro foi estacionado
        let carro =
            document.getElementById(idCarro);


        // Descobre a cor do carro

        let corCarro =
            carro.classList[1];


        // Descobre a cor da vaga

        let corVaga =
            vaga.classList[1];



        if (corCarro === corVaga) {


            // Aumenta os pontos

            pontos++;

            pontosTela.textContent = pontos;


            // Remove o símbolo de estacionamento

            vaga.innerHTML = "";


            // Coloca o carro dentro da vaga

            vaga.appendChild(carro);


            // Impede que seja arrastado novamente

            carro.setAttribute(
                "draggable",
                "false"
            );


            carro.style.cursor = "default";


            // Mensagem

            mensagem.textContent =
                " Carro estacionado!";

            mensagem.style.color =
                "#4caf50";


            

            if (pontos === 3) {

                mensagem.textContent =
                    "🏆 PARABÉNS! Todos os carros foram estacionados!";

            }

        }


        
        else {

            mensagem.textContent =
                " Essa não é a vaga desse carro!";

            mensagem.style.color =
                "#f44336";

        }

    });

});




function reiniciar() {

    location.reload();

}