//1- Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos, 'ex.1');

paragrafos.forEach((item) => {
  console.log(item, 'ex.1');
});

paragrafos.forEach( item => console.log(item, 'ex.1 arrow function'))

//2- Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
  console.log(item.innerText, 'ex.2');
});

paragrafos.forEach((item) => {console.log(item.innerText, 'ex.2 arrow function')});

//3- Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

imgs.forEach((item, index) => {console.log(item, index, 'arrow function')});

let i = 0;
imgs.forEach(() => {console.log(i++)});

imgs.forEach(() => i++);

console.log(i);