/* 4- Crie uma função que receba um número
 N e retorne a soma de todos os números de 1 até N*/

 const prompt = require("prompt-sync")()

const numero = Number(prompt("Digite um número: "));


function somaNumeros(n){
    let soma = 0
    for (let i = 1; i <= n; i++){
        soma += i
    }
    return soma

}
console.log(somaNumeros(numero))