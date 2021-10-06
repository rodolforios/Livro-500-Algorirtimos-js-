//Ler nome, endereço e telefone e imprimi-los.

const readline=require('readline-sync');

let nome = readline.question('Digite o nome: ');
let ende = readline.question('Digite endereço: ')
let tel = readline.question('Digite o telefone: ');

console.log(`Nome: ${nome}`);
console.log(`Endereço: ${ende}`);
console.log(`Telefone: ${tel}`);