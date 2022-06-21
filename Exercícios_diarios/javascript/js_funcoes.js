
function convertToFarenheit(currentType, currentValue){

        if(currentType == 'Celsius') {
            // Celsius to Farenheit
            return ((currentValue*1.8) +32);

        } else if (currentType =='Kelvin') {
            // Kelvin to farenheit
            return (((currentValue-273)*1.8)+32);
        } else {
            console.log('Digite um tipo diferente do atual para ser convertido.')
        }

}

function convertToKelvin(currentType, currentValue){

    if(currentType == 'Celsius') {
        // Celsius to Kelvin
        return (currentValue+273);

    } else if (currentType =='Farenheit') {
        // Farenheit to Kelvin
        return (((currentValue-32)*5/9)+273);
    } else {
        console.log('Digite um tipo diferente do atual para ser convertido.')
    }

}
function convertToCelsius(currentType, currentValue){

    if(currentType == 'Farenheit') {
        // Farenheit to Celsius
        return ((currentValue-32) / 1.8);

    } else if (currentType =='Kelvin') {
        // Kelvin to Celsius
        return (currentValue-273);
    } else {
        console.log('Digite um tipo diferente do atual para ser convertido.')
    }

}


function typeProof(value, type, newtype){
    if (newtype == 'Farenheit'){
        console.log(convertToFarenheit(type, value));
    } else if (newtype == 'Kelvin'){
        console.log(convertToKelvin(type, value));
    } else {
        console.log(convertToCelsius(type, value));
    }

    }

console.log(typeProof(300,'Kelvin','Celsius'));




//Lista 2 Exercicio1
/*
function somaValores(num1, num2, num3, num4){
    return (num1+num2+num3+num4);
}

function media(value){
    return (value/4);
}

function resultado(nota1, nota2, nota3, nota4){
    return media(somaValores(nota1,nota2,nota3,nota4));

}

console.log('Média do aluno Carlos: ' + resultado(10, 10, 8, 9))
*/

/*
function somaNotas(nota1, nota2, nota3, nota4){
    

    if ((typeof(nota1) && typeof(nota2) && typeof(nota3) && typeof(nota4)) !== typeof(1)){

        console.log('você deve digitar um valor válido');
     
    
    } else {
        soma = (nota1 + nota2 + nota3 + nota4);
        console.log(soma);
           return soma;

    }

    
}

somaNotas(5,6,7,10);
*/
/*
function retornaTipo(tipo){
    console.log(typeof(tipo));

}

retornaTipo(true);
*/
/*
function sum(num1,num2){
    console.log(num1+num2);
}


sum(15,876);
*/
/*
function textReturn(text){
    console.log(text);
}

textReturn('Retorno pela função');
*/