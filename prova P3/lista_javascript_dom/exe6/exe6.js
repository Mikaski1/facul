function cumprimento(nome = "Visitante") {
  return "Olá, " + nome + "!";
}

function saudarComNome() {
  let mensagem = cumprimento("Carlos");

  document.getElementById("resultado").textContent = mensagem;
}

function saudarSemNome() {
  let mensagem = cumprimento();

  document.getElementById("resultado").textContent = mensagem;
}
