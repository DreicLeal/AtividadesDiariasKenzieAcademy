//Exercicio 5
/*
function assentoPremiado(name,sitPlace){
    if(sitPlace == 2 ){
        console.log(`O assento premiado foi: ${sitPlace}, passageiro, ${name[sitPlace-1]}`)
    } else if(sitPlace == 3){
    console.log(`O assento premiado foi: ${sitPlace}, passageiro, ${name[sitPlace-1]}`)
    }
    else if(sitPlace == 1){
        console.log(`O assento premiado foi: ${sitPlace}, passageiro, ${name[sitPlace-1]}`)
    
}
console.log(sitPlace)
}

let passageiros = ['jão', 'Zé', 'Tonho']
let random = Math.floor(Math.random() * (4 - 1) + 1);

assentoPremiado(passageiros,random);
*/

//Exercicio 4

function qualTipoDeElemento(lista, posicao) {
     
    if(typeof(lista[posicao]) == "number"){
         console.log(typeof(lista[0]));
      }
    }
    let tiposDiversos =[1.5,"String",true,10]
  
    qualTipoDeElemento(tiposDiversos, 0)
    

//Exercicio 3

function testaPosicao(lista, posicao){
    for (let i = 0; i <= carrinhoDeCompras.length; i++){
        if(lista[i] == "Vou ser Dev" && posicao == 0){

    
                console.log('cliente ganhou');
            
            }else {
                console.log('cliente não ganhou');
            }
    }

  }
  let carrinhoDeCompras =[
   "Funko Pop Kakashi",
   "Dragon Ball Collection",
   "Vou ser Dev"
  ]
  testaPosicao(carrinhoDeCompras, 0)



//Exercicio 2
/*
let nomeDosCompetidores = ["Maria", "Heric", "Roberta", "Rafael", "Lucas"]
let posicoesDoPodio = [1,2,3,4,5]

console.log(` O campeão é ${nomeDosCompetidores[0]}`);
let last = (nomeDosCompetidores.length) -1;


console.log(`O último também receberá um premio, seu nome é: ${nomeDosCompetidores[last]} `);

for (let i = 0;i < nomeDosCompetidores.length;i++){
    console.log(`${posicoesDoPodio[i]}º ${nomeDosCompetidores[i]}`)
}
*/

//Exercicio 1
/*
let minhaPrimeiraLista = [
    "Matemática",
    "Química",
    "Geografia",
    "Português",
    "Física",
  ];

  console.log(minhaPrimeiraLista[2]);

  minhaPrimeiraLista[2] = 'História'
  console.log(minhaPrimeiraLista);
  */