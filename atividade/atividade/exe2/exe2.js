function destacarCursos() {
  let cursos = document.getElementsByClassName("curso");

  for (let i = 0; i < cursos.length; i++) {
    cursos[i].style.backgroundColor = "lightyellow";
    cursos[i].style.padding = "10px";
    cursos[i].style.color = "darkblue";
  }
}
