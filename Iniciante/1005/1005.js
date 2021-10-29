// Leia dois valoresde ponto flutuante de dupla precisão nota1 e nota2,
// que correspondem a 2 notas de um aluno.
// Media com peso
// A soma de cada nota multiplicado * seu peso
// Dividido pela soma dos pesos.

const pesoNota1 = 3.5;
const pesoNota2 = 7.5;

let nota1 = parseFloat(prompt('Digite a nota 1')).toFixed(2);
let nota2 = parseFloat(prompt('Digite a nota 2')).toFixed(2);

let mediaComPeso = ((nota1 * pesoNota1) + (nota2 * pesoNota2)) / (pesoNota1 + pesoNota2);

console.log(' MEDIA = ' + mediaComPeso.toFixed(5));
