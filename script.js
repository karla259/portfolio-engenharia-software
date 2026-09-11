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
