// 
var pessoa = {
    nome: 'Galieo',
    idade: 31
}

var quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado;
    },
    perimetro(lado) {//nãp precisa escrever o function
        return this.lados * lado;
    }
    
}