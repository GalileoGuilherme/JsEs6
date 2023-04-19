// const imgs = document.querySelectorAll('img'); mostra todas as imagens

// imgs.forEach(function(item, index, array){ ///////mostra todos os itens com seus respectivos indices e seu array
//   // console.log(item, index, array)
// });

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);//transformando em array

// console.log(titulos);
// console.log(titulosArray);

titulosArray.forEach(function(item, index, array){
  // console.log(item, index, array);
});

const imgs = document.querySelectorAll('img');

// let i = 0;
// imgs.forEach((item) => {
//   console.log(i++)
// });

let i = 0;
imgs.forEach(function() { 
  console.log(i++)
});

imgs.forEach(() => console.log(i++));