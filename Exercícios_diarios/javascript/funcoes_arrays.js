//Exercicio 3 Convert To Array S5-15

function convertToArray(nArray){
    list = []
    list = nArray.split(',')

    return list
}

let str = "Verifcar se está conectado na energia,Verificar se o monitor está conectado na energia, Verificar se todos os cabos estão conectados, Apertar o botão de power, Esperar tela acender, usar"
console.log(convertToArray(str))
function orderToDo(order){
    let strOrder = ``
    for(let i=0;i<order.length;i++){
        strOrder +=`${i+1}º- ${order[i]}\n`
    }return strOrder
}
console.log(orderToDo(convertToArray(str)))

/*
//Exercicio 2 Palavra MalucaS5-10

function pneumoultra(reverse){
    let invert =''
    let i = reverse.length-1
    for(i;i>=0;i--){
        invert +=reverse[i]

    }return invert.toUpperCase()
}

let word = 'Pneumoultramicroscopicossilicovulcanoconiótico'
console.log(pneumoultra(word))
 

function oPorY(shift){
    let nString = ''
    for(let i =0;i<shift.length;i++){
        if(shift[i] === 'O' || shift[i] === 'Ó'){
            nString +='Y'
        }else{
            nString += shift[i]
        }
    }return nString

 }
console.log(oPorY(pneumoultra(word)))

function repeat (remove){
    let noRepeat = ''
    for(let i = 0;i<remove.length;i++){
        if(!noRepeat.includes(remove[i])){
            noRepeat +=remove[i].toLowerCase()
        }

    }return noRepeat.replace(noRepeat[0],noRepeat[0].toUpperCase())

}
console.log(repeat(oPorY(pneumoultra(word))))


const bigBoss = [ 
    ["Nome", "Boss"],
    ["Idade", 89],
    ["Cidade", "Rio de Janeiro"],
    ["Estado", "RJ"],
    ["Ano de Nascimento", 1933]
]

function generatePassWord(idade,Cidade){
    let newPass =`${idade}@$${Cidade}`
    return newPass
}
console.log(generatePassWord(bigBoss[1][1],bigBoss[2][0]))

function toReverse(reverse){
    let sRevertida =''
    let i = reverse.length-1
    for(i;i>=0;i--){
        sRevertida += reverse[i]
    }return sRevertida
}
console.log(toReverse(generatePassWord(bigBoss[1][1],bigBoss[2][0])))

function toShift (shift){
    let n
    if(shift[0] !== shift[0].toUpperCase()){
        n = shift.replace(shift[0],shift[0].toUpperCase())

    }else if(shift[0] == shift[0].toUpperCase()){
        n = shift.replace(shift[0],shift[0].toLowerCase())
    }
    return n
}
console.log(toShift(toReverse(generatePassWord(bigBoss[1][1],bigBoss[2][0]))))

//Exercicio 1 Trimm The Grass S5-06
/*
function trimmTheGrass(grass){
    for(let i=0;i<grass.length;i++){
        for(let j=0;j<grass[i].length;j++){
            if(grass[i][j] === 'G'){
                grass[i][j] = 0
            }
            
        }
    }return "Tarefa concluída"
}

let garden = [
    [0,0,0,'G'],
    [0,0,'G',0],
    [0,'G',0,0],
    ['G',0,0,0]
]
console.log(trimmTheGrass(garden))


function lookUp(lookFor){
    for(let i=0;i<lookFor.length;i++){
        for(let j=0;j<lookFor[i].length;j++){
            if(lookFor[i][j] == 'G'){
                return false
            }

        }
    }return true
}
console.log(lookUp(trimmTheGrass(garden))) */