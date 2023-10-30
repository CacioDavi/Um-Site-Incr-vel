function toggleMode() {
  const html = document.documentElement;
  // Alternar entre tema Claro e Escuro
  html.classList.toggle("light");

  // pegar a tag img
  const img = document.querySelector("#profile img");

  // substituir a imagem
  if(html.classList.contains('light')) {
  // se tiver light mode, adcionar a imagem light
    img.setAttribute("src", "./assets/assets/avatar-light.png");
    img.setAttribute("alt", "Um cara de óculos. Com um fundo azul.")
  } else {
  // se tiver light mode, adcionar a imagem light
    img.setAttribute("src", "./assets/assets/avatar.png");
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e uma camisa preta, barba e fundo amarelo."
    )

  }

}