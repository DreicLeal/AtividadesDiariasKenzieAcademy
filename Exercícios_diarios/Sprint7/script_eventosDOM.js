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
  let tALiq              = document.createElement('a')
  let tSpanDistribuidor  = document.createElement('span')
  let tPrecoLiq          = document.createElement('span')
  tALiq.href = '#'


  tSpanNome.classList.add('styleCardName')
  tSpanValor.classList.add('styleCardPrice')
  tALiq.classList.add('styleCardLiq')
  tSpanDistribuidor.classList.add('styleCardDistribuidor')
  tPrecoLiq.classList.add('stylePrecoLiq')

  tSpanNome.innerText         = nome
  tSpanValor.innerText        = valor +',00'
  tALiq.innerText             = ('Em liquidação')
  tSpanDistribuidor.innerText = (`Fabricante: ${distribuidor}`)
  tPrecoLiq.innerText         = (`Hoje apenas: ${precoLiq}`)
  console.log(tPrecoLiq)

  tALiq.addEventListener('click', function(){
    console.log("Hello World")
  })

  body.appendChild(ul)
  ul.appendChild(li)
  li.append(tSpanNome, tSpanValor, tALiq, tSpanDistribuidor)