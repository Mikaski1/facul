function alterarDisciplina() {
  let disciplina = document.getElementById("disciplina");

  disciplina.textContent = "Desenvolvimento Web";
  disciplina.style.color = "blue";
}

function destacarConteudos() {
  let conteudos = document.getElementsByClassName("conteudo");

  for (let i = 0; i < conteudos.length; i++) {
    conteudos[i].style.backgroundColor = "lightblue";
    conteudos[i].style.padding = "10px";
  }
}

function alterarSubtitulos() {
  let subtitulos = document.getElementsByTagName("h2");

  for (let i = 0; i < subtitulos.length; i++) {
    subtitulos[i].style.color = "darkred";

    subtitulos[i].textContent = "Tópico: " + subtitulos[i].textContent;
  }
}
