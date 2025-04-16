document.addEventListener('DOMContentLoaded', () => {
    function getQueryParam(param) {
      const params = new URLSearchParams(window.location.search);
      return params.get(param);
    }
  
    const destinoTituloParam = decodeURIComponent(getQueryParam('destino') || '');
    const conteudoContainer = document.getElementById('conteudo-detalhe');
  
    if (!destinoTituloParam) {
      conteudoContainer.innerHTML = '<p>Nenhum destino selecionado.</p>';
      return;
    }
  
    const destino = destinos.find(d => d.titulo === destinoTituloParam);
    if (!destino) {
      conteudoContainer.innerHTML = '<p>Destino não encontrado.</p>';
      return;
    }
  
    // Adiciona uma classe para animação (caso queira personalizar ainda mais)
    conteudoContainer.classList.add('fade-in');
  
    const conteudoHTML = `
      <img src="${destino.imagem}" alt="Imagem de ${destino.titulo}">
      <h1>${destino.titulo}</h1>
      <h2>Sobre ${destino.titulo}</h2>
      <p>${destino.descricao}</p>
      <a href="${destino.hotelLink}" class="botao">Ver Hotéis</a>
      <a href="index.html" class="botao">Voltar para Home</a>
    `;
    conteudoContainer.innerHTML = conteudoHTML;
  
    // Remove a classe após a animação (se desejar, com um setTimeout)
    setTimeout(() => {
      conteudoContainer.classList.remove('fade-in');
    }, 1000);
  });
  
  