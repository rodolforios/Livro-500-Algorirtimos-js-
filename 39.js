//Entrar com dois números reais e imprimir a média aritmética com a mensagem
//"média" antes do resultado.

const readline = require('readline-sync');

const num1 = Number( readline.question('Digite um número real: '));
const num2 = Number( readline.question('Digite outro número:  '));

const med = (num1+num2)/2;

console.log(`Média: ${med}`)