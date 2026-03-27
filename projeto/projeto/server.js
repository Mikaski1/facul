//número positivo

/*const prompt = require("prompt-sync")()

let n1 = Number(prompt("Digite um número"))

if(n1 > 0){
    console.log("seu número é positivo:")
}
else if(n1 < 0){
    console.log("seu número não é negativo")
}
else{
    console.log("seu número é zero")
}
*/

// número maior que o outro

/*const prompt = require("prompt-sync")()

let n1 = Number(prompt("Digite um número"))
let n2 = Number(prompt("Digite um número"))

if(n1 > n2){
    console.log($(n1))
}

else if(n1 < n2){
    console.log($(n2)) 
}

else{
    console.log('seu número é igual')
}*/

// idade para votar

/*const prompt = require("prompt-sync")()

let n1 = Number(prompt("Digite a sua idade"))

if(n1 < 16){
    console.log('Não pode votar')
}

if else(n1 < 18){
    console.log('Voto opcional')
}

if else(n1 < 70){
    console.log('Voto Obrigatório')
}

else{
    console.log('Voto opcional')
}*/

//nota de prova

/*const prompt = require("prompt-sync")()

let n1 = Number(prompt("digite a sua nota"))

if(n1 >= 7){
    console.log('Aprovado')
}

else if(n1 <= 5){
    console.log('reprovado')
}

else{
    console.log('Recuperação')
}*/

//número decrescente
/*
const prompt = require("prompt-sync")()

let n1 = Number(prompt('digite'))
let n2 = Number(prompt('digite'))
let n3 = Number(prompt('digite'))

if(n1 > n2 && n2 < n3){
    console.log($(n1), $(n2), $(n3))
}

else if(n1 > n3 && n3 < n2){
    console.log($(n1), $(n3), $(n2))
}

else if(n2 > n1 && n1 < n3){
    console.log($(n2), $(n1), $(n3))
}

else if(n2 > n3 && n3 < n1){
    console.log($(n2), $(n3), $(n1))
}

else if(n3 > n1 && n1 < n2){
    console.log($(n3), $(n1), $(n2))
}

else{
    console.log($(n3), $(n2), $(n1))
}
*/

// ano bissexto
/*
const prompt = require("prompt-sync")()

let ano = Number(prompt('digite o ano'))

if(ano % 4 === 0){
    console.log('seu ano é bissexto')
}

else{
    console.log('seu ano não é bissexto')
}
    */

//turno
/*
const prompt = require("prompt-sync")()

let turno = (prompt('digite a turno'))

if(turno === "M"){
    console.log('Matutino')
}

else if(turno === "V"){
    console.log('Vespertino')
}

else if(turno === "N"){
    console.log('Noturno')
}

else{
    console.log('Inválido')
}
    */

//desconto
/*
const prompt = require("prompt-sync")()

let compra = Number(prompt('digite o valor da compra'))

if(compra < 100){
    console.log('Sem desconto')
}

else if(compra <= 500){
    console.log($(compra * 0.90))
}

else{
    console.log($(compra * 0.85))
}
    */

//imc
/*
const prompt = require("prompt-sync")()

let peso = Number(prompt('digite o seu peso'))
let altura = Number(prompt('digite o sua altura'))
let imc = peso / (altura * altura)

if(imc < 18.5){
    console.log('magreza')
}

else if(imc >= 18.5 && imc <= 24.9){
    console.log('normal')
}

else if(imc >= 25 && imc <= 29.9){
    console.log('sobrepeso')
}

else if(imc >= 30 && imc <= 39.9){
    console.log('obesidade')
}

else{
    console.log('obesidade grave')
}
    */