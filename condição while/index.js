// A condição precisa ser uma expressão lógica
// while (condição) {
//npm install prompt-sync 
//}

//estrutura de repetição com teste no inicio


/*let n = 0 

while(n < 3) {
    console.log('Continua')
    n = n + 1

}

let n = 0 

while(n < 3) {
    console.log('Continua')
    n = n + 1

}*/

//Faça um algoritimo que escreva os primeiros 10 
// números inteiros positivos
/*
let n = 1

while(n <= 10) {
    console.log(n)
    n = n + 1

}
*/
//peça um número ao usuario e mostre 
// todos os numeros de 1 até ele
/*
const prompt = require("prompt-sync")

let n = Number(prompt("Entre com um número"))

let x = 1

while( x <= n ) {
    console.log(n)
    x = x + 1
}
    */
// mostre todos os números pares de 1 até 50
/*let n = 1

while(n <= 50){
    if (n % 2 === 0){
    console.log(n)
}
    n = n + 1
}
    */

// mostre todos os números impares de 1 até 50
/*
let n = 1

while(n <= 50){
    if (n % 2 === 1){
    console.log(n)
}
    n = n + 1
}
    */
// calcule a soma dos numeros de 1 até 100
let n = 1
let soma = 0
while(n <= 100){
    console.log(n)
    soma = soma + n
    n++
}