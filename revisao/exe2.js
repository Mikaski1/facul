/*faça uma função que receba o peso (kg) e a altura em (m) de uma pessoa,
calcule o IMC = peso /altura2  */

const prompt = require("prompt-sync")()

const peso = Number(prompt("Enter a number: "));
const altura = Number(prompt("Enter a number: "));

function imc(p, a){
    return p / (a ** 2);
}

console.log(imc())