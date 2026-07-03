// CONTEUDOS
/*
Map

Filter

Find
FindIndex
FindLast
FindLastIndex

Some
Every

Reduce
*/





// funçoes: trechos de código que resolvem determinada situação; Serve para isolar uma lógica específica no meu algoritimo e permite que seja reutilizada.

// Sintaxe
// function nome(p1, p2, p3=3) {
//     return 11
// }


/*
const novo1 = vetor.map(function(v,k){
    return 2 * v
})

const novo2 = v => 2 * v */
/*const vetor = [1, 2, 3, 4]
const filtro = []

for (let i = 0; i > vetor.length; i++){
    if (vetor[i] % 2 === 0) {
        filtro.push(vetor[i])
    }
}
console.log(vetor, filtro)


const filtro1 =
vetor.filter(v => v % 2 === 0)


const f = 
vetor
.filter(v => v % 2 === 0)
.map (v => 8)

console.log(f)


*/

//exe1 converter vetor de números para vetor de objetos
/*
const vetor = [2, 3, 5, 7, 8]

const novo = vetor
.filter(v => v % 2 !== 0)
.map(n => ({n}))

console.log(novo)
*/

//exe2
/*const vetor = [2, 3, 5, 7, 8]

const novo = vetor.map(function(n){
    return {n}
})
console.log(novo)
*/





/*
Find
FindIndex
FindLast
FindLastIndex
*/
/*
const vetor = [2, 3, 5, 7, 8]

const r1 = vetor.filter(v => v % 2 !== 0)
const r2 = vetor.find(v => v % 2 !== 0)
const r3 = vetor.findIndex(v => v % 2 !== 0)
const r4 = vetor.findLast(v => v % 2 !== 0)
const r5 = vetor.findLastIndex(v => v % 2 !== 0)
console.log(r1, r2, r3, r4, r5)
*/
//reduce
/*
const vetor = [2, 3, 5, 7, 8]
const soma = 
vetor.reduce((acc, a) => acc * a, 1)
console.log(soma)
*/
//exe1 reduce com função de filter para ímpares
/*
const vetor = [2, 3, 5, 7, 8]
const somenteImpares = 
vetor.reduce((acc, a) => {
    if(a % 2 === 1) {
        acc.push(a)
    }
    return acc
}, {})
console.log(somenteImpares)
*/
//retornar o dobro do número usando o reduce, invés do map
/*
const vetor = [2, 3, 5, 7, 8]
const dobro = 
vetor
.reduce((acc, a) => {
    acc.push(2*a)
    return acc
}, {})
console.log(dobro)
*/
//verificar se um número é ímpar 
/*
const vetor = [2, 3, 5, 7, 8]
const dobro = 
vetor
.reduce((acc, a) => {
    
    return acc || a % 2 == 1 
}, false)
console.log(dobro)*/

//verificar se todos número é ímpar 
/*
const vetor = [2, 3, 5, 7, 8]
const dobro = 
vetor
.reduce((acc, a) => {
    
    return acc && a % 2 == 1 
}, true)
console.log(dobro)*/
/*
const alunos = [
    {nome: "Ana", turma: "A"},
    {nome: "Jõao", turma: "B"},
    {nome: "Maria", turma: "A"},
    {nome: "Pedro", turma: "C"},
    {nome: "Carlos", turma: "B"},
    {nome: "Julia", turma: "A"},
]
const turmas = alunos.reduce((acc, a) => {
    if (!acc[a.turma])
    acc[a.turma] = []

    acc[a.turma].push(a.nome)
    return acc
}, [])
console.log()*/