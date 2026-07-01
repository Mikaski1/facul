function adicionarCurso() {
  let lista = document.getElementById("listaCursos");

  let novoItem = document.createElement("li");

  novoItem.textContent = "JavaScript";

  lista.appendChild(novoItem);
}
