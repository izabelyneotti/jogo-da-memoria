[
  { id: 1, imagem: 'imagem1.jpg' },
  { id: 2, imagem: 'imagem2.jpg' },
  // Adicione mais cartas...
];

const jogo = document.querySelector('#jogo');
let cartaSelecionada = null;

cartas.forEach((carta) => {
  const elementoCarta = document.createElement('div');
  elementoCarta.classList.add('carta');
  elementoCarta.innerHTML = `<img src="${carta.imagem}" alt="${(link unavailable)}">`;
  elementoCarta.addEventListener('click', () => {
    if (!cartaSelecionada) {
      cartaSelecionada = carta;
      elementoCarta.classList.add('selecionada');
    } else {
      if ((link unavailable) === (link unavailable)) {
        console.log('Combinação encontrada!');
      } else {
        console.log('Não combina!');
      }
      cartaSelecionada = null;
      elementoCarta.classList.remove('selecionada');
    }
  });
  jogo.appendChild(elementoCarta);
});
```
