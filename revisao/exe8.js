/* 8- Faça uma função que receba um vetor e retorne somente os pares */

const vetor = [1, 2, 3, 4, 5, 6]

function somentePares(v){
    return v.filter(n => n % 2 === 0);

}
console.log(somentePares(vetor))



// outra maneira

function somentePares2(v){
    const pares = []
    for (let i = 0; i < v.length; i++){
        if (v[i] % 2 === 0) pares.push(v[i])
    }
    return pares
}

console.log(somentePares2(vetor))