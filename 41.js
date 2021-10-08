//Entrar com quatro números e imprimir a média ponderada, sabendo-se que os
//pesos são respectivamente: 1, 2, 3 e 4.

const readline = require('readline-sync');

let num1 = Number(readline.question('Digite um número: ')*1);
let num2 = Number(readline.question('Digite um número: ')*2);
let num3 = Number(readline.question('Digite um número: ')*3);
let num4 = Number(readline.question('Digite um número: ')*4);

let medPon = (num1+num2+num3+num4)/10;
console.log(`A média ponderada é: ${medPon}`)