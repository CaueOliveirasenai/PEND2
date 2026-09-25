const botao = document.getElementById("buscarUsuarios");
const resultado = document.getElementById("resultado");
const idUsuario = document.getElementById("idUsuario");

// botao.addEventListener("click", function() {

//     // Fetch + then + catch (EXEMPLO)
//     fetch("https://jsonplaceholder.typicode.com/users")

//         .then((resposta) => resposta.json())

//         .then((dados) => {

//             resultado.innerHTML = "";

//             dados.forEach((usuario) => {

//                 resultado.innerHTML += `
//                     <p>
//                         <strong>${usuario.name}</strong> <br>
//                         ${usuario.email}
//                     </p>
//                     <hr>
//                 `;

//             });

//         }) // fecha o then

//         .catch((erro) => {

//             console.log("Erro:", erro);

//         }); // fecha o catch

// }); // fecha o addEventListener

///////////////////////////////////////////////////////////////////////////////////

// //asyns / await (EXEMPLO)
// botao.addEventListener("click", async function() {
//     try {
//         const resposta = await fetch("https://jsonplaceholder.typicode.com/users");

//         const dados = await resposta.json();

//         resultado.innerHTML = "";

//         dados.forEach((usuario) => {
//             resultado.innerHTML += `
//                 <p>
//                     <strong>${usuario.name}</strong> <br>
//                     ${usuario.email}
//                 </p>
//                 <hr>
//             `;
//         });
//     } catch (erro) {
//         resultado.innerHTML = "Erro ao buscar usuários";
//         console.log(erro);
//     }
// });

// com campo de busca (EXEMPLO)
botao.addEventListener("click", async function() {

    const id = idUsuario.value;

    if (id === "") {
        resultado.innerHTML = "Digite um ID";
        return;
    }

    try {

        const resposta = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        const dados = await resposta.json();

        resultado.innerHTML = `
            <p>
                <strong>${dados.name}</strong> <br>
                Email: ${dados.email} <br>
                Cidade: ${dados.address.city} <br>
                Telefone: ${dados.phone}
            </p>
            <hr>
        `;

    } catch (erro) {

        resultado.innerHTML = "Erro ao buscar usuário.";
        console.log("Erro:", erro);

    }

});