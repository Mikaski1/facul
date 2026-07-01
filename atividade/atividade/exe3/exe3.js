function alterarParagrafos() {
  let paragrafos = document.getElementsByTagName("p");

  for (let i = 0; i < paragrafos.length; i++) {
    paragrafos[i].style.color = "green";
    paragrafos[i].style.fontSize = "18px";
    paragrafos[i].textContent = "Parágrafo alterado pelo JavaScript.";
  }
}
