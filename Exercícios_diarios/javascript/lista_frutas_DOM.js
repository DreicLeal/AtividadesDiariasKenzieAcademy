let listFrutas = ['abacaxi','limão','banana','goiaba']
let ul = document.getElementsByClassName('list-itens')[0];

function createElementeItens(){
for(let i = 0; i < listFrutas.length; i++){

  let element = document.createElement('li')
  element.innerText = `${element[i]}`//use o template string para acessar o elemento da lista
  ul.appendChild(element) // insira a li dentro da lista
}
}
  
createElementeItens()