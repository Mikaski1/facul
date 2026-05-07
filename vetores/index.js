// vetor, for: estrutura de repetição
/*
const vetor = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < vetor.length; i++) {
    console.log(i, vetor[i])
    //vetor[i] = 5
}

*/

//mostre a soma dos números
/*
const vetor = [1, 2, 3, 4, 5, 6, 7, 8]
let soma = 0
for (let i = 0; i < vetor.length; i++) {
    soma +=vetor[i]
}
    console.log(soma)
*/

//mostre do ultimo até o primeiro
/*
const vetor = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = vetor.length - 1; i >= 0;  i--) {
    console.log(i, vetor[i])

}
*/
//faça um algoritimo que solicite 5 numeros para o usuario
//preencha o vetor e depois execute a soma dos elementos do vetor

/*
const prompt = require('prompt-sync')();
const vetor = []

for (let i = 0; i < 5; i++) 
    vetor.push(Number(prompt("Digite seu número")));

    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i]
}
    console.log(soma)
*/

//a mesma coisa só que mostrando a média depois(acho?)
/*
const prompt = require('prompt-sync')();
const vetor = []

for (let i = 0; i < 5; i++) 
    vetor.push(Number(prompt("Digite seu número")));

    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i]
}
 let media = soma / vetor.lenght
 let quantidade = 0

 for (let i = 0; i < vetor.length; i++){
    if (vetor[i] > media){
        quantidade++
    }
 }
console.log(quantidade)
*/
    //maior e menor número do vetor nesse mesmo algoritimo
/*
    const prompt = require('prompt-sync')();
const vetor = []

for (let i = 0; i < 5; i++) 
    vetor.push(Number(prompt("Digite seu número")));

    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i]
}
 let media = soma / vetor.lenght
 let quantidade = 0

 for (let i = 0; i < vetor.length; i++){
    if (vetor[i] > media){
        quantidade++
    }
 }
console.log(quantidade)

let i_maior  = 0
for (let i = 1; i < vetor.length; i++){
    if (vetor[i] > vetor[i_maior]) i_maior = i
}

let i_menor = 0

for (let i = 1; i < vetor.length; i++){
    if (vetor[i] < vetor[i_menor]) i_menor = i
}
console.log(console.log(vetor[i_maior], vetor[i_menor]))
*/

//trocar elementos

/*
const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 1; i < vetor.length / 2; i++){
    let aux = vetor[i]
    vetor[i] = vetor[vetor.lenght -1 -i]
    vetor[vetor.lenght -1 -i] = aux
}

console.log(vetor)
*/

//criem um vetor com frutas que diga a posição, se nao estiver, fruta não encontrada