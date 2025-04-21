function toggleMode() {
  const html = document.documentElement

  /* Pode ser Assim
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  ou resumido abaixo*/

  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt","foto de Mayk Brito sorrindo, usando óculos escuro e camisa preta, e fundo colorido")
  } else {
    //se não tiver light mode adicionar a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt","foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo")
  }

  /*
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("alt", "foto de Mayk Brito sorrindo, usando óculos escuro e camisa preta, e fundo colorido")
  } else {
    img.setAttribute("alt", "foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo")
  }*/
}

