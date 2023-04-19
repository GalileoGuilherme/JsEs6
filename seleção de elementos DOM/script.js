//retorne no console todas as imagens do site
const img = document.querySelectorAll('img');
console.log(img);

//retorne no console apenas as imagens que começam com a palavra imagem
const imagemAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagemAnimais);


//selecione todos os links internos(onde href começa com #)
const links = document.querySelectorAll('[href^="#"]');
console.log(links);

//selecione o primeiro h2 dentro de .animais-descricao
const animais = document.querySelector('.animais-descricao');
const h2Animais = animais.querySelector('h2');
console.log(h2Animais);

//selecione o último p do site

const ps = document.querySelectorAll('p');
const ultimoP = ps[ps.length - 1];

console.log(ultimoP.textContent);