/* 5- Crie uma função para calcular o fatorial de um número. Sabendo que 
o fatorial de N é N * (n-1) * (n-2) * ... * 1 */


const prompt = require("prompt-sync")()

const numero = Number(prompt("Digite um número: "));

function fatorial(n) {
    for (let i = n; i > 1; i--) {
        fat = fat * i
    }
    return fat


}

console.log(fatorial(numero))
