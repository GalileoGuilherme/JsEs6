// var videoGames = ['Switch', 'Ps4', 'Xbox', '3Ds'];

// for(var i = 0; i < videoGames.length; i++){
//     console.log(videoGames[i]);
// }

/////////////////


// for(var i = 0; i < videoGames.length; i++){
//     console.log(videoGames[i]);
//     if(videoGames[i] === 'Ps4') {
//         break;
//     }
// }

// forEach

// videoGames.forEach(function(games) {
//     console.log(games)// o parâmetro é tranformado dinamicamente no array correspondente 
// })


// videoGames.forEach(function(games, index) {
//     console.log(games, index)
// })

//exercicio

//Crie uma arraay com os anos que o Brasil ganhou a copa do mundo

// let campeao = [1959, 1962, 1970, 1994, 2002]

// for (let i = 0; i < campeao.length; i++) {
//     console.log(`O brasil ganhou a copa do mundo em ${campeao[i]}`)
    
// }

//Interaja com o array de fruas e pare de verificar qunado chegar em 'Pera'
// let frutas = ['Banana', 'Maçã', 'Uva', 'Pera', 'Melancia']

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
//     if(frutas[i] === 'Pera') {
//         break;
//     }
    
// }

//Coloque a última fruta do array em uma variável sem remover do array

// let ultimaFruta = frutas[frutas.length -1];
// console.log(ultimaFruta);



//////atribuição e ternario

// var numero = 20;

// numero += 10; //numero = numero + 10
// console.log(numero);

//ternário
// condição ? true : false

// exemplo:
// var idade = 19
// var podeBeber = (idade >= 18) ? 'Pode Beber' : 'Não pode beber';
// console.log(podeBeber);


//exercicio

//Some 500 ao valor de scroll abaixo, atribuindo novo valor a scroll

var scroll = 1000;
scroll += 500;
console.log(scroll);

//Atribua 'dar credito' para a variável darCredito, caso o cliente possua carro e casa e 'nao dar cradito' caso contrário

var possuiCarro = true;
var possuiCasa = true;
var darCredito = possuiCarro && possuiCasa ? 'Dar crédito' : 'Não dar crédito';
console.log(darCredito)


