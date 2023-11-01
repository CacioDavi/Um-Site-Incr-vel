function toggleMode() {
  const html = document.documentElement;
  // Alternar entre tema Claro e Escuro
  html.classList.toggle("light");

  // pegar a tag img
  const img = document.querySelector("#profile img");

  // substituir a imagem
  if(html.classList.contains('light')) {
  // se tiver light mode, adcionar a imagem light
    img.setAttribute("src", "./assets/myAssets/1683120400715_.png")
    img.setAttribute("alt", "Cacio Davi.")
  } else {
  // se tiver light mode, adcionar a imagem light
    img.setAttribute("src", "./assets/myAssets/1683120400715_.png")
    img.setAttribute(
      "alt",
      "Uma foto minha."
    )

  }

}