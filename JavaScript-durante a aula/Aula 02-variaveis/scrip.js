//tipos primitivos

//boolean
var vOUf = false;
console.log(typeof(vOUf));

// number
var numeroQualquer = 35;
console.log(typeof(numeroQualquer));

//string
var nome = 'Rodrigo';
console.log(typeof(nome)); 

//function
var funcao = function() {}
console.log(typeof(funcao)); 

// como declarar
var variavel = 'Rodrigo';
variavel = 'bagage';
console.log(variavel);

let variavel2 = 'Rodrigo';
variavel2 = 'bagage';
console.log(variavel2);

const constante = 'Rodrigo';
constante = 'bagage';
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();


// atribuição
var atribuição = 'Rodrigo';

// comparação
var comparacao = '0'== 0;
console.log(comparacao);

// comparação identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// adição
var adicao = 1 + 1;
console.log(adicao);

// subtração
var subtracao = 2 - 1;
console.log(subtracao);

// multiplicação
var multiplicacao = 2 * 3;
console.log(multiplicacao);

// divisão real
var divisaoReal = 6 / 2 ;
console.log(divisaoReal);

// divisão inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

// potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

// maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

// menor que
var menorQue = 5 < 2 ;
console.log(menorQue);

// maior ou igual a
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

// menor ou igual a
var menorOuIgual= 5 <= 2;
console.log(menorOuIgual);

var e = true && true;
console.log(e);

var ou = false || false;
console.log(ou);

var nao = !true; 
console.log(nao);
