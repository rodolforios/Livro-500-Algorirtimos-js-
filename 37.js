//Ler dois números inteiros e imprimir o produto.

const readline= require('readline-sync');

let num1 = Number(readline.question("Digite um número: "));
let num2 = Number(readline.question("Digite outro número: "))
let mult = (num1*num2);
console.log(`O produto entre ${num1} e ${num2} é ${mult}`);
