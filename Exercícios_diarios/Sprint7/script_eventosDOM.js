let produto = {
    nome: 'Notebook',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'
  }

  const body = document.querySelector('body')
  const ul = document.createElement('ul')
  const li = document.createElement('li')

  let nome          = produto.nome
  let valor         = produto.valor
  let liq           = produto.liquidacao
  let distribuidor  = produto.distribuidor
  let precoLiq      = valor*0.7

  let tSpanNome          = document.createElement('span')
  let tSpanValor         = document.createElement('span')
  let tSpanLiq           = document.createElement('span')
  let tADistribuidor     = document.createElement('a')
  let tPrecoLiq          = document.createElement('span')
  tADistribuidor.href    = 'https://kenzie.com.br/'

  tSpanNome.classList.add('styleCardName')
  tSpanValor.classList.add('styleCardPrice')
  tSpanLiq.classList.add('styleCardLiq')
  tADistribuidor.classList.add('styleCardDistribuidor')
  tPrecoLiq.classList.add('stylePrecoLiq')

  tSpanNome.innerText         = nome
  tSpanValor.innerText        = valor +',00'
  tSpanLiq.innerText          = 'Em liquidação'
  tADistribuidor.innerText    = (`Fabricante: ${distribuidor}`)
  tPrecoLiq.innerText         = (``)

  tSpanLiq.addEventListener('click', function(){
    if(liq == true){
      tPrecoLiq.innerText == (``) ?
      tPrecoLiq.innerText = (`Hoje apenas: ${precoLiq}`) :
      tPrecoLiq.innerText = (``)
    }
  })
  tADistribuidor.addEventListener('click',function(event){
    liq == true?
    event.preventDefault():
    event
  })

  body.appendChild(ul)
  ul.appendChild(li)
  li.append(tSpanNome, tSpanValor, tSpanLiq, tPrecoLiq,  tADistribuidor)