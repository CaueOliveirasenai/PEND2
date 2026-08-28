const produto = document.querySelector("#produto");
const carrinho = document.querySelector("#Carrinho");

// event = objeto fornecido pelo navegador que contém informações sobre o evento que ocorreu
// dataTransfer = objeto para armazenar e transportar dados durante operações de arrastar e soltar
produto.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", event.target.id);
});

// mudar o padrão
carrinho.addEventListener("dragover", function (event) {
    event.preventDefault();
    console.log("Pode soltar aqui no carrinho...");
});

//soltar
carrinho.addEventListener("drop", function (event) {
    event.preventDefault();

    const id = event.dataTransfer.getData("text");
    const elemento =document.querySelector("#" + id);

    // A div do produto passa a ser filho da div carrinho
    carrinho.appendChild(elemento);
});
