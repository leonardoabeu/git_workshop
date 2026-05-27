// BOTÃO SAIBA MAIS

const botao = document.getElementById("botao");
const sobre = document.getElementById("sobre");

botao.addEventListener("click", () => {

  sobre.scrollIntoView({
    behavior: "smooth"
  });

});

// BOTÃO HISTÓRIA

const btnHistoria = document.getElementById("btnHistoria");
const historia = document.getElementById("historia");

btnHistoria.addEventListener("click", () => {

  if (historia.style.display === "block") {

    historia.style.display = "none";
    btnHistoria.textContent = "Ver Minha História";

  } else {

    historia.style.display = "block";
    btnHistoria.textContent = "Ocultar História";

  }

});