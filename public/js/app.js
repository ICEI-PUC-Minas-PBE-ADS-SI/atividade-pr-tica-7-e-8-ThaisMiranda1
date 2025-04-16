document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('lista-destinos');

  if (!container) {
    console.error("Elemento com id 'lista-destinos' não encontrado!");
    return;
  }

  destinos.forEach(destino => {
    const article = document.createElement('article');
    article.classList.add('caixa-post');

    // Cria o link com query string utilizando encodeURIComponent
    const infoLink = `destinos.html?destino=${encodeURIComponent(destino.titulo)}`;

    article.innerHTML = `
      <img src="${destino.imagem}" alt="Imagem de ${destino.titulo}">
      <h4 class="subtitulo"><span>${destino.titulo}</span></h4>
      <p class="texto">${destino.descricao}</p>
      <a href="${destino.hotelLink}" class="botao">Ver Hotéis</a>
      <a href="${infoLink}" class="botao">Mais Informações de Destino</a>
      <a href="${destino.imagemLink}" class="botao">Clique para ver a imagem</a>
    `;

    container.appendChild(article);
  });
});
