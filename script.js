const formulario = document.getElementById("formContato");
const mensagemSucesso = document.getElementById("mensagemSucesso");

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nome = document.getElementById("nome").value;

    mensagemSucesso.textContent =
        "Obrigado, " + nome + "! Sua mensagem foi registrada com sucesso.";

    formulario.reset();

});