// Ano automático no rodapé
const ano = document.getElementById("ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}


// Animação simples ao aparecer na tela
const elementos = document.querySelectorAll(
    ".projeto-card, .skill, .sobre-card, .formacao-card"
);

const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {
                entrada.target.classList.add("aparecer");
            }

        });

    },
    {
        threshold: 0.15
    }
);

elementos.forEach((elemento) => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(25px)";
    elemento.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observador.observe(elemento);

});


const estilo = document.createElement("style");

estilo.innerHTML = `
    .aparecer {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(estilo);
