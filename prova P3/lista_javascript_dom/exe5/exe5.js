function montarMensagem(nome) {
  return "Olá, " + nome + "! Bem-vindo ao sistema.";
}

function mostrarMensagem() {
  let mensagem = montarMensagem("Ana");

  let paragrafo = document.getElementById("mensagem");

  paragrafo.textContent = mensagem;
}
