//CodeWars conta caractere

function countChar(string, char) {
    let cont = 0;
    for( i = 0; i< string.length; i++){
      if (string[i].toLowerCase() === char.toLowerCase()){
        cont++;
      }
    }
    return cont
  }
  

//CodeWars disemvowel
/*
function disemvowel(str) {
    
    return str.replace(/[aeiou]/gi, '');
}
  
  console.log(disemvowel('abracadabrA'))
*/


//CodeWars vowel count
function getCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++){
      
      if (str[i] == 'a' || str[i] == 'o' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
        count ++;
      }
    
    }
    console.log(count)
  }
  
  getCount('abracadabra')

//CodeWars cooking eggs
/*
function cookingTime(eggs) {
    let time = 5;
    if (eggs % 8 === 0 ){
      return (eggs/8)*time
    }else {
     return time*(Math.floor(eggs/8)+1)    
    }
  
  }
  
   cookingTime(8);
*/
//Exercicio 2
/*
function somaArr(soma){
    let result = 0;
    for(let i = 0; i < soma.length; i++){
        result += parseInt(soma[i])

    }
    
    console.log(result)
}
let arr = [1, '4', 9, 18]

somaArr(arr)
*/
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