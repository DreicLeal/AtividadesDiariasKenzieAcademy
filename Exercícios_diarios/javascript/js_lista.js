
let digito1 = parseFloat(prompt('digite o número para calcular: '));

let digito2 = parseFloat(prompt('digite o 2º número para calcular: '));

let operador = prompt('Digite a operação que deseja fazer entre esses números:\n (+)(-)(*)(/) ');

if (operador == '+'){
    alert(digito1+digito2);
} else if (operador == '-') {
    alert(digito1-digito2);
}else if (operador == '*') {
    alert(digito1*digito2);
}else if (operador == '/') {
    alert(digito1/digito2);
} else {
    alert('Operador invalido')
}

/* Exercicio 1 - sem resolução.
let a = parseInt(prompt("Insira um valor para a"))
let b = parseInt(prompt("Insira um valor para b"))
let aux = 0
aux = a
a = b
b = aux
alert(`Os valores originais de a e b: ${a}, ${b}. Após a troca são: ${a}, ${aux}`)
*/

//Exercicio 2 
/*
let num1 = parseInt(prompt('Digite um número inteiro para vê-lo impresso no alerta:'));

alert(`O número digitado foi ${num1}`);
*/
//Exercício 3
/*
let num1 = parseInt(prompt(`digite o 1º número a ser somados:`));
let num2 = parseInt(prompt(`digite o 2º número a ser somados:
${num1}+`));
let num3 = parseInt(prompt(`digite o 3º número a ser somados:
${num1}+${num2}+`));

let total = (num1 + num2 + num3);

alert(`A soma entre ${num1}, ${num2} e ${num3} é igual a ${total}`)
*/
//Exercício 3
/*
let nota1 = parseFloat(prompt('Entre com a nota so 1º semestre:'));
let nota2 = parseFloat(prompt('Entre com a nota so 2º semestre:'));

let media = (nota1 + nota2)/2;

alert (`A sua média anual foi: ${media}`);
*/
//Exercício 4
/*
let num = parseInt(prompt('digite um númeor inteiro qualquer para ver o resto da divisão por 2:'));

let rest = (num % 2);

alert(`O resto da divisão do número ${num} é igual a: ${rest} `);
*/
// Exercício 5
/*
let num1 = parseInt(prompt('vamos calcular o quadrado do num escolhido'));

let quadrado = (num1**2);

alert(`O quadrado do número ${num1} é igual a: ${quadrado}`);
*/
//Exercício 6
/*
let num1 = parseFloat(prompt(`Digite 4 números para calcularmos a média ponderada:`));
let num2 = parseFloat(prompt(`Digite 4 números para calcularmos a média ponderada: \n ${num1}+`));
let num3 = parseFloat(prompt(`Digite 4 números para calcularmos a média ponderada: \n ${num1}+${num2}+`));
let num4 = parseFloat(prompt(`Digite 4 números para calcularmos a média ponderada: \n ${num1}+${num2}+${num3}`));

let media = (((num1*1) + (num2*2) + (num3*3) + (num4*4))/4);

alert(`A média ponderada entre esses 4 números é igual a: ${media}`);
*/

//Exercício 7
/*
let matematica = parseFloat(prompt(`digite a nota para matemática`));
let portugues = parseFloat(prompt(`digite a nota para português \n Nota de Matemática: ${matematica}`));
let conhecimentosGerais = parseFloat(prompt(`digite a nota para Conheicmentos gerais \n Nota de Matemática: ${matematica} \n Nota de português: ${portugues}`));
let informatica = parseFloat(prompt(`digite a nota para Informática \n Nota de Matemática: ${matematica} \n Nota de português: ${portugues} \n Nota de Conhecimentos Gerais: ${conhecimentosGerais}`));

let media = (((matematica*2) + portugues + conhecimentosGerais + informatica)/4);

alert(`A sua média geral é igual a: ${media}`);
*/

//Exercício 8
/*
let dividendo = parseInt(prompt('Digite um número inteiro: '));
let divisor = parseInt(prompt('Digite outro número inteiro: '));

alert(`a divisão entre ${dividendo} e ${divisor} é igual a ${dividendo/divisor},\n a divisão inteira é igual a ${Math.round(dividendo/divisor)} e;\n o resto da divisão é igual a ${dividendo % divisor}`)
*/

//Exercício 8
/*
let aplicacao = parseFloat(prompt('Digite o saldo da aplicação: '));

alert(`O novo saldo com correção de 1% é igual a: R$${aplicacao+(aplicacao/100)}`);
*/

//Exercicio 9
/*
let diagonalMaior = parseInt(prompt('Digite o tamanho da diagonal maior(Somente número): '));
let diagonalMenor = parseInt(prompt('Digite o tamanho da diagonal menor(Somente número): '));

prompt(`Considerando as diagonais maior e menor, respectivamente, com tamanhos iguais a ${diagonalMaior} e ${diagonalMenor} a área do Losango é igual a: ${(diagonalMaior*diagonalMenor)/2}`)
*/

//Lista 2 Exercício 1
/*
let salario = parseFloat(prompt('Digite o valor do salário mínimo atual: '));
let gasto = parseInt(prompt('Digite quantos quilowatts foram gastos no período: '));
let quilowatt = parseFloat((((salario)/100)/7));
let valorRecibo = (quilowatt*gasto);

alert(`Cada quilowatt custa R$${Math.round(quilowatt)}\n O valor total da sua conta no periodo é de R$${Math.round(valorRecibo)}\n O valor a ser pago com desconto de 10% aplicado é de ${Math.round(valorRecibo*.9)}`);
*/

//Exercicio 2
/*
let produto = (prompt('Digite o nome do produto que deseja levar'));
let preco = parseFloat(prompt(`Confira o preço de ${produto} e insira o valor no campo a seguir: `))
let precoComDesconto = parseFloat(preco*.91);

alert(`O valor a ser pago com desconto é de R$${precoComDesconto}`);
*/

//Exercício 3
/*
let a = prompt('Digite um valor para A');
let b = prompt('Digite um valor para B');

let auxA = a;
let auxB = b;

a = auxB;
b = auxA;

alert(`O valor original de A é ${auxA} e o valor original de B é ${auxB}\n agora A vale ${a} e B vale ${b}`)
*/
/*
let fitas = parseInt(prompt('Quantas fitas há na locadora? '));
let valorCobrado = parseInt(prompt('Qual valor é cobrado por fita alugada? '));
let faturamentoAnual = parseFloat((((fitas/3)*valorCobrado)*12));
let multa = ((((fitas/3)/10)*(valorCobrado/10)));
let fitasEstragadas = (fitas*.02)
let fitasTotal = ((fitas-fitasEstragadas)+(fitas/10));

alert(`O faturamento Anual é igual a R$${faturamentoAnual.toFixed(2)}\n O valor ganho com multas foi de R$${multa.toFixed(2)}\n O total de fitas estragadas foi de ${fitasEstragadas.toFixed(0)} \n O total de fitas após a reposição é de ${fitasTotal.toFixed(2)}\n O faturamento anual somado as multas é de R$${(multa+faturamentoAnual).toFixed(2)}`);
*/

let numeroDaConta = (prompt('Digite o número da sua conta com 3 dígitos'));
let inverso = (numeroDaConta[2]+numeroDaConta[1]+numeroDaConta[0]);
//let contaNum = parseInt(numeroDaConta);
//let inversoNum = parseInt(inverso);
let soma = (contaNum+inversoNum);
let calculoDigito = ((soma[0]*1) + (soma[1]*2) + (soma[2]*3));
//let digito = calculoDigito[calculoDigito.length-1];

console.log(soma);
console.log(calculoDigito);
//console.log(digito);

