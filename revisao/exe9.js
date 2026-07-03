/* 9- Faça uma função que receba um número
 e mostre a sequência de fibonacci até esse número
 1 1 2 3 5 8 13 21 */

 const numero = 55

 function fibonacci(n){
    let a = 1
    let b = 2
    do {
        console.log(a)
        let aux = a + b
        a = b
        b = aux

    } while (a < n)

 }
fibonacci(numero)

