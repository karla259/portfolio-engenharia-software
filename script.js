// ================================
// ANO AUTOMÁTICO NO RODAPÉ
// ================================

const ano = document.getElementById("ano");

if (ano) {
  ano.textContent = new Date().getFullYear();
}


// ================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ================================

const elementos = document.querySelectorAll(
  "section, .projeto-card, .skill, .sobre-card, .formacao-card, .objetivo-card"
);

const observer = new IntersectionObserver(
  (entradas) => {

    entradas.forEach((entrada) => {

      if (entrada.isIntersecting) {

        entrada.target.classList.add("ativo");

        // Para de observar depois que aparecer
        observer.unobserve(entrada.target);
      }

    });

  },
  {
    threshold: 0.15
  }
);


// Adiciona a classe de animação
elementos.forEach((elemento) => {

  elemento.classList.add("reveal");

  observer.observe(elemento);

});

const formContato = document.getElementById("formContato");
const mensagemStatus = document.getElementById("mensagemStatus");

if (formContato && mensagemStatus) {

    formContato.addEventListener("submit", async function (event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "" || email === "" || mensagem === "") {

            mensagemStatus.textContent =
                "⚠️ Preencha todos os campos.";

            mensagemStatus.className = "erro";

            return;
        }
       

const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailValido.test(email)) {
    mensagemStatus.textContent = "⚠️ Digite um e-mail válido.";
    mensagemStatus.className = "erro";
    return;
}
        mensagemStatus.textContent = "⏳ Enviando mensagem...";
        mensagemStatus.className = "";

        const destino = "karlasoares397@gmail.com";

        const endpoint =
            "https://" + "formsubmit.co/ajax/" + destino;

        try {

            const resposta = await fetch(endpoint, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },

                body: JSON.stringify({

                    name: nome,

                    email: email,

                    message: mensagem,

                    _subject: "Nova mensagem do meu portfólio"

                })

            });

            if (!resposta.ok) {
                throw new Error("Erro ao enviar");
            }

            mensagemStatus.textContent =
                "✅ Mensagem enviada com sucesso! Obrigada pelo contato.";

            mensagemStatus.className = "sucesso";

            formContato.reset();

        } catch (erro) {

            mensagemStatus.textContent =
                "❌ Não foi possível enviar. Tente novamente.";

            mensagemStatus.className = "erro";
        }

    });
}
