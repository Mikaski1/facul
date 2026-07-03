/* faça uma função que receba um ano e retorne se ele é bissexto (true) ou
não (false)*/

const prompt = require("prompt-sync")()

const ano = 2004

function eBissexto(a){
    return (a % 4 === 0) ||  (a % 400 === 0 && a % 1000) 
    // return true | false
}

console.log(eBissexto(ano))


//estrutura condicional 