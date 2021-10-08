//Entrar com dois números inteiros e imprimir a seguinte saída:dividendo:divisor:quociente:resto:

const readline = require('readline-sync');

const num1 = Number(readline.question('Digite um número: '));
const num2 = Number(readline.question('Digite um segundo número: '));

console.log(`Dividendo: ${num1}`);
console.log(`Divisor: ${num2}`);
console.log(`Quociente: ${num1/num2}`);
console.log(`Resto:${num1%num2}`);