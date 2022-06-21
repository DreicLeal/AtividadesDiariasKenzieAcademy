// Exercicio 1
let valor1 = 10;
let valor2 = '10';
let comparacaoDeValores = valor1 === valor2;

console.log(comparacaoDeValores);

//Exercicio 2
let usuario1Altura = 1.8;
let usuario2Altura = 1.75;
let comparacaoDeAlturas = usuario1Altura > usuario2Altura;
console.log(comparacaoDeAlturas);

// Exercicio 3
let valor3 = 10;
let valor4 = '10';
let comparacaoDeValor = valor3 !== valor4;

console.log(comparacaoDeValor);

//Exercicio 1
let idade = 30;
let avaliarIdade = (idade >= 18 && idade <= 25);
console.log(avaliarIdade);

if (avaliarIdade == true){
    console.log(`A idade está entre 18 e 25 a idade é ${idade}.`);
} else {
    console.log(`A idade não está entre 18 e 25 a idade é ${idade}.`);
}

//Exercicio 2
let carroNome = 'chevrolet';
let carroAno = 2019;
let filtrarCarro = (carroNome == 'chevrolet' && carroAno == 2019);

if(filtrarCarro){
    console.log(`Carro encontrado`);
}else {
    console.log(`Carro não encontrado`);

}

//Exercicio 3 **
let botaoMenu = false;
let avaliarClick = botaoMenu != true;
console.log(avaliarClick);
if (avaliarClick) {
    console.log(`Fechar menu`);
} else {
    console.log(`Abrir menu`);
}

//Exercicio 1 If else

let usuarioAutenticado = true;

if (usuarioAutenticado) {
    console.log(`Seja bem vindo!`);
}

//Exercicio 2 If Else 
let usuario = 'Ana';
let autenticado = false;

if (usuario == 'Ana') {
    autenticado = true;
    console.log(`Olá ${usuario} você está autenticada.`);
    console.log(autenticado);
}else {
    console.log(`Usuario não reconhecido`);
} 

//Exercicio 3 If Else
let produto = 'maçã';
let quantidadeDoProduto = 2;
let quantidadeDoProdutoParaPromocao = (5 - quantidadeDoProduto);

if(produto == 'maçã' && quantidadeDoProduto >=5){
    console.log(`Você recebeu uma promoção, o valor do produto será R$ 5.00`);
} else {
    console.log(`Se você adicionar mais ${quantidadeDoProdutoParaPromocao} maçãs, o valor sairá por R$ 5.00.`);
}