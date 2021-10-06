//Ler dois números inteiros e imprimir a soma. Antes do resultado, deverá aparecer
//a mensagem: Soma

const readline = require('readline-sync');

let num1 = Number(readline.question('Digite um número: '));
let num2 = Number(readline.question('Digite outro número: '));

let sum = (num1+num2);

console.log(`A Soma de ${num1} e ${num2} é ${sum}`);