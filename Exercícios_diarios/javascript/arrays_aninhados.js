//Exercício 12
/*
function pPorP (troca){
    let newStr = ''
    for(let i=0;i<troca.length;i++){
        
        if(troca[i] === 'p'){
            let shift = troca[i].toUpperCase()
            newStr += shift
        } else{
            newStr +=troca[i]
        }
    }return newStr

}
let str = 'podemos proprositalmente prosseguir por papiro'
console.log(pPorP(str))

//Exercício 11
/*
function zeroPorO (troca){
    let newStr = ''
    for(let i=0;i<troca.length;i++){
        
        if(troca[i] === 'o'){
            newStr += 0
        } else{
            newStr +=troca[i]
        }
    }return newStr

}
let str = 'vamos colocar zeros no lugar do o'
console.log(zeroPorO(str))
*/
//Exercício 10

function somaStrings(stringArray){
    let soma = stringArray.split(' ')
    let nStr =[]
    for(let i=0;i<soma.length;i++){
        if(soma[i].length % 2 !==0){
        nStr.push(soma[i])
    }
    }
return nStr
}

str = 'estou fazendo um teste para ver as palavras que tem uma quantidade de letras ímpar'
console.log(somaStrings(str))

//Exercício 9
/*
function somaStrings(stringArray){
    let soma = 0
    for(let i=0;i<stringArray.length;i++){
        soma += stringArray[i].length
    }
return soma
}

str = ['abc','xyz','ijk']
console.log(somaStrings(str))
*/
//Exercício 8
/*
function contaA(vogalA){
    let cont = 0;
    for(let i=0;i<vogalA.length;i++){
        if(vogalA[i] == 'a'){
            cont++
        }
    }return cont

}

console.log(contaA('abracadabra'))*/

//Exercício 7
/*
function mediaArray(media){
    let soma=0;
    let nArray = []
    for(let i=0;i< media.length;i++){
        soma +=media[i]
        }
        let nMedia = soma/media.length
        console.log(nMedia)
        for(let i = 0;i<media.length;i++){
            if(media[i]>nMedia){
                nArray.push(media[i])
            }
        }
    return nArray

}
let array = [-1, 5 ,10 ,-5 ,20,14,6,-10]


console.log(mediaArray(array))
*/

//Exercício 6
/*
function somaArray (somado){
    let nArray = []
    for (let i=0;i <somado.length;i++){
        nArray.push(somado[i]+5)
        
    }

return nArray
}

let array = [-1, 5 ,10 ,-32 ,-20 ,8 ,14 ,-3 ,40]
console.log(somaArray(array))
*/
//Exercício 5
/*
function somaArray (resSoma){
    let soma = 0;
    let i;
    for( i=0;i < resSoma.length;i++){
        soma += resSoma[i]

    }
    if(soma > i){
        return true
    }
    return false

}
let array = [-1, 5 ,10 ,-32 ,-20 ,8 ,14 ,-3 ,40]
console.log(somaArray(array))
*/
//Exercício 4
/*
function evenNums(even){
    let evenArray = []
    for(let i=0; i<= even;i++){

        if(i % 2 == 0){
            evenArray.push(i)
        }
    }return evenArray
}
console.log(evenNums(30))
*/
//Exercício 3
/*
function numerosNegativos(cNegativo){
    for(let i = 0; i<cNegativo.length;i++){
        if(cNegativo[i]<0){

            neg.push(cNegativo[i])
            j +=cNegativo[i]
        }
    }return j
}
let j =0;
let neg = []
let array = [-1, 5 ,10 ,-50 ,-20 ,8 ,14 ,-3 ,37]
numerosNegativos(array)
console.log(`Encontramos ${neg.length} números negativos, a soma dele é igual a: ${j}`)
*/
//Exercício 2
/*
function numerosNegativos(cNegativo){
    let j = 0;
    for(let i = 0; i<cNegativo.length;i++){
        if(cNegativo[i]<0){
            j++
            neg.push(cNegativo[i])
        }
    }return j
}
let neg = []

let array = [-1, 5 ,10 ,-50 ,-20 ,8 ,14 ,-3 ,37]

console.log(`Encontramos ${numerosNegativos(array)} números negativos \n ${neg}`)*/
 

//Exercício 1 Arrays aninhados
/*
let esposinha = ['sabonete', 'papel', 'pasta', 'desodorante','escovas' ]
let dreic = ['arroz', 'feijao' ,'batata','leite','agua']
let conca = ['bandAid', 'esparadrapo', 'alcool', 'gaze', 'mertiolate']
let bruno = ['bola', 'war', 'xadrez', 'kindle', 'NintendoDS']
let amigos = ['Winnie','Dreic','Conça','Bruno']
let caixa = [esposinha,dreic,conca,bruno]
console.table(caixa)

for (let i = 0;i<caixa.length;i++){
   // console.log(caixa[i])
for(let j = 0; j< caixa[i].length;j++){

    if(caixa[i].length !== 5){
        if(caixa[i].length > 5){
            alert(`${amigos[i]} Você deverá devolver ${(caixa[i].length-5)} itens`)
            break
        }
        alert(`${amigos[i]} Você deverá trazer mais ${5-caixa[i].length } itens`)
        break
    }
    //console.log(caixa[i][j])
}

}
*/