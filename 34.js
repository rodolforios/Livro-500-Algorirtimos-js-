//Ler um número inteiro e imprimir seu sucessor e seu antecessor.

const readline = require('readline-sync');

let num1= Number( readline.question('Digite um número inteiro: '));

let suc= (num1+1);
let ant=(num1-1);


console.log(`Sucessor: ${suc}`);
console.log(`Antecessor:${ant} `)
