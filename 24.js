//Entrar com um número inteiro de 3 casas e imprimir o algarismo da casa das unidades.


var readlineSync = require('readline-sync');
 

var valor = readlineSync.question('Digite um numero inteiro de 3 casas:  ');
if(valor.length<3 || valor.length > 3){
    console.log("O número digitado não possui 3 números")
}else{
    console.log(`O número correspondente ao número de unidades é ${valor[2]}`);
}

