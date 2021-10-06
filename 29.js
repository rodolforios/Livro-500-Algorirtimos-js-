//Imprimir seu nome

var readlineSync= require('readline-sync')

var nome= readlineSync.question('Qual o seu nome?')

console.log(`Bem vindo ${nome}`)