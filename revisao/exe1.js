// Escreva um algoritimo que receba 3 números e informe o maior deles

const PromptSync = require("prompt-sync")

const prompt = require("prompt-sync")()


// na prova só dar um valor
const a = Number(prompt("Enter a number: "));
const b = Number(prompt("Enter a number: "));
const c = Number(prompt("Enter a number: "));

if (a > b && b > c) {console.log(a)}
else if (b > c) {console.log(b)}
else {console.log(c)}