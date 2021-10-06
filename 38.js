//Ler um número real e imprimir a terça parte deste número.

const readline = require('readline-sync');

let num = Number(readline.question('Digite um número: '));
let res = (num/3).toFixed(2);

console.log(`A terça parte de ${num} é ${res}`);