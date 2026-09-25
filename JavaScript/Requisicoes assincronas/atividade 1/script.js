const botao = document.getElementById("buscar");
const data = document.getElementById("data");
const resultado = document.getElementById("resultado");


// Quando clicar no botão
botao.addEventListener("click", async function() {

    // Pega a data escolhida
    const dataEscolhida = data.value;

    // Verifica se uma data foi escolhida
    if (dataEscolhida === "") {

        resultado.innerHTML = "<p>Escolha uma data.</p>";

        return;
    }


    try {

        // Faz a requisição para a API da NASA
        const resposta = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dataEscolhida}`
        );


        // Verifica se a resposta deu erro
        if (!resposta.ok) {

            throw new Error("Erro ao consultar a API");

        }


        // Converte a resposta para JSON
        const dados = await resposta.json();


        // Verifica se é uma imagem
        if (dados.media_type === "image") {

            resultado.innerHTML = `

                <h2>${dados.title}</h2>

                <p class="data">
                    Data: ${dados.date}
                </p>

                <img 
                    src="${dados.url}" 
                    alt="${dados.title}"
                >

                <p class="explicacao">
                    ${dados.explanation}
                </p>

            `;

        }

        // Caso seja um vídeo
        else {

            resultado.innerHTML = `

                <h2>${dados.title}</h2>

                <p class="data">
                    Data: ${dados.date}
                </p>

                <p>
                    A NASA disponibilizou um vídeo para esta data.
                </p>

                <a href="${dados.url}" target="_blank">
                    Assistir vídeo
                </a>

                <p class="explicacao">
                    ${dados.explanation}
                </p>

            `;

        }


    } catch (erro) {

        // Mostra mensagem de erro
        resultado.innerHTML = `
            <p>
                Não foi possível consultar a NASA.
            </p>
        `;

        console.log("Erro:", erro);

    }

});