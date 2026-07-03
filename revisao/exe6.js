/* 6- Crie uma função que receba um vetor e 
retorne um objeto com o maior e o menor número*/

const vetor = [1, 2, 3, 4, 5]

function maiorMenor(v){

    let menor = maior = v[0]

  for (let i = 1; i < v.length; i++){
    if (v[i] > maior){
        maior = v[i]
    } else if (v[i] < menor) {
        menor = v[1]
    }
  } 

    return {menor, maior}
}
