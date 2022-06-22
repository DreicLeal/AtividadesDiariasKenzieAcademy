//Exercicio 2

function somaArr(soma){
    let result = 0;
    for(let i = 0; i < soma.length; i++){
        result += parseInt(soma[i])

    }
    
    console.log(result)
}
let arr = [1, '4', 9, 18]

somaArr(arr)

// Exercicio 1 Exercitando o uso do for 
/*
function searchEven(numeros){
    let arrpares = []
    for(let i = 0;i <= numeros.length; i++ ){
        if(numeros[i] % 2 === 0){
            //console.log(numeros[i])
            arrpares.push(numeros[i])
        }
    }
    console.log(arrpares)
}

const arr = [5, 4, 7, 30, 16, 89];

searchEven(arr)
*/