//Entrar com uma data no formato ddmmaa e imprimir no formato mmddaa.

var readlineSync = require('readline-sync');
 

var data = readlineSync.question('Digite uma data no formato ddmmaa:  ');
if(data.length<6 || data.length > 6){
    console.log("O número digitado não está no formato ddmmaa:")
}else{
    console.log(`O número correspondente a data é:  
    
    mês: ${data[2]}${data[3]}
    dia: ${data[0]}${data[1]}    
    ano: ${data[4]}${data[5]} `);
}