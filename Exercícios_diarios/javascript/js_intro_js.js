/*

//Exrcicio 1
let nome1 = 'Dreic';

console.log(`Olá sou eu, o ${nome1} aqui`);

//Exrcicio 2
let nome = 'Dreic';
let sobreNome = 'Leal';

console.log(`Olá, meu nome é ${nome} ${sobreNome}`);

//Exrcicio 3
let primeiroNome = 'Dreic';
let segundoNome = 'Leal';
let idade = 31;

console.log(`Olá, meu primeiro nome é ${primeiroNome}, meu segundo nome é ${segundoNome}. E eu tenho ${idade} anos.`);

//Exrcicio 4
let preco1 = 15;
let preco2 = 27.90;
let precoTotal = preco1 + preco2 ;

console.log(`Comprei uma xícara por ${preco1} reais, e dois copos por ${preco2} reais. No total, gastei ${precoTotal} reais.`);

//Exrcicio 5
let contador = 0;
let incremento = 1;
console.log(contador);
contador = contador + incremento;
console.log(contador);
contador = contador + incremento;
console.log(contador);
contador = contador + incremento;
console.log(contador);
contador = contador + incremento;
console.log(contador);
contador = contador + incremento;
console.log(contador);

/*
while (contador < 5) {
    contador++;
    console.log(contador);
}
*/

//Exrcicio 6
/*
let ano = 2022;
let anoNascimento = 1991;
let idadeAtual = ano - anoNascimento;

console.log(`No ano ${ano}, eu tenho/vou ter ${idadeAtual} anos de idade`);

//Ecercicio 7
let alturaRetangulo = 5;
let larguraRetangulo = 7;
let areaRetangulo = alturaRetangulo*larguraRetangulo;

console.log(`Um retângulo com largura de ${larguraRetangulo} e altura de ${alturaRetangulo}, possui ${areaRetangulo}cm de área total.`);

//Exercicio 8

let diaAtual = '13';
let mesAtual = '06';
let anoAtual = '2022';
let dataCompleta = ` A data de hoje é: ${diaAtual}/${mesAtual}/${anoAtual}`;
console.log(dataCompleta);


//Exercicio 9
let valorA = 1;
let valorB = 3;

console.log(`O primeiro valor é igual a ${valorA} e o segundo é igual a ${valorB}`);

valorA = valorB;
console.log(`Agora o Primeiro valor é igual a ${valorA}`);
valorB = valorA;
console.log(`Agora o Segundo valor é igual a ${valorB}`);
*/


//Exercicio Strings 1 
let nome = 'Dreic';

let comprimento = nome.length;

console.log(`O meu nome possui ${comprimento} caracteres de comprimento.`);
console.log(nome.length);

//Exercicio Strings 2
let preco = 15;

let precoFormatado = (`R$${preco},00`);
console.log(`O valor ${preco} formatado ficaria assim: ${precoFormatado}.`);

//Exercicio Strings 2
let cumprimento = 'Bom dia';
let nome1 = 'Zeca';
let sobreNome = 'Campodonio';

let mensagemCumprimento = (`${cumprimento}, ${nome1} ${sobreNome}.`);
console.log(mensagemCumprimento);
