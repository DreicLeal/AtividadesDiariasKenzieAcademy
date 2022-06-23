
//CodeWars deleting spaces

function deleteSpaces(str){
    let novaStr = ''
    for(let i = 0; i < str.length; i++){
        if(str[i] !== ' '){
            novaStr += str[i]
        }
    }
    return console.log(novaStr)
}

let string = 'a b c d e nova string'
deleteSpaces(string)

// Revisão Entrega S3 quarta
/*
let eu = 'Você'
let ele = 'Amigo'
let refri = 3
let precoRefri = 11.99
let arroz = 3
let precoArroz = 22.99
let vinho = 3
let precoVinho = 70;

let totalRefri = refri*precoRefri
let totalArroz = arroz*precoArroz
let totalVinho = vinho*precoVinho
let totalCompras = totalArroz+totalRefri+totalVinho
let totalSVinho = totalCompras-totalVinho
console.log(totalCompras)

if ((totalCompras) % 2 === 0){
    console.log(`${eu} irá pagar R$${totalSVinho/2} e ${ele} irá pagar ${(totalSVinho/2)+totalVinho}`)
} else{
    console.log(`${eu} irá pagar R$${totalCompras/2} e ${ele} irá pagar ${totalCompras/2}`)
}
*/
// Revisão Usuário autenticado
/*
let usuario = 'Ana'
let autenticado = false

if(usuario === 'Ana'){
    autenticado = true
    if(usuario === 'Ana' && autenticado === true){
        console.log(`Olá ${usuario}, você está autenticado(a)`)
    }
    } else {
        console.log('É necessário que identifique-se antes')
    }
*/
/*
let a = 10;
let b = 5;

let auxA = a;
let auxB = b;

a = auxB
b = auxA

console.log(`O valor inicial de A é igual a ${auxA} e de B é ${auxB}, e agora A recebe ${a} e B recebe ${b}`)



let nome = 'Dreic'
let sobrenome = 'Leal'
let anoNascimento = 1991
let cidade = 'Salvador'
let anoAtual = parseInt(prompt('Digite o ano em que estamos:'))
let idade = anoAtual-anoNascimento
let string = (`Eu sou o ${nome} ${sobrenome} tenho ${idade} anos e moro em ${cidade}`)

console.log(string)
*/