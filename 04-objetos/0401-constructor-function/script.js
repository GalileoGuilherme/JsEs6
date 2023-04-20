// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

function Pessoa(nomeAtribuido, idadeAtribuida) {
  this.nome = nomeAtribuido;
  this.idade = idadeAtribuida;
  this.andar = function() {
    console.log(nome + ' Andou');
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa('João', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);

console.log(joao);
console.log(maria);
console.log(bruno);


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function(classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    })
  }
  this.removeClass = function(classe) {
    elementList.forEach((element) => {
      element.classList.remove(classe);
    })
  }
}

const listaItens = new Dom('li');
const ul = new Dom('ul');

// listaItens.addClass('ativar');
// ul.addClass('ativar-ul')

//////////////////////////////////////////////////////

const pessoa1 = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

function Pessoa1(nomeAtribuido, idadeAtribuida) {
  this.nome = nomeAtribuido;
  this.idade = idadeAtribuida;
  this.andar = function() {
    console.log(nome + ' Andou');
  }
}

const luis = new Pessoa1('luis', 41);
const bione = new Pessoa1('bione', 28);
const ada = new Pessoa1('ada', 26);
const daniel = new Pessoa1('daniel', 36);

console.log(luis);
console.log(bione);
console.log(ada);
console.log(daniel);

///////////////////////

const especialidade = {
  nome: 'Nome funcionário',
  especialidade: 'especialidade na empresa'
}

function Especialidade(nomeAtribuido, especialidadeAtribuida) {
  this.nome = nomeAtribuido;
  this.especialidade = especialidadeAtribuida;
}

bio = new Especialidade('bione', 'qa');
adah = new Especialidade('Ada', 'ux');
danielson = new Especialidade('Edenielson', 'front');
manu = new Especialidade('Emanuele', 'qa');
diogo = new Especialidade('Diogão', 'front');

console.log(bio);
console.log(adah);
console.log(danielson);
console.log(manu);
console.log(diogo);