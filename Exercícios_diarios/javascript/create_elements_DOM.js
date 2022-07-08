const article      = document.createElement('article')
const head1        = document.createElement('h1')
const paragraph    = document.createElement('p')
const link         = document.createElement('a')

head1.innerText     ='Título do post'
paragraph.innerText = 'Descrição do post'
link.innerText      = 'Ver post completo'

const body = document.querySelector('body')

body.appendChild(article)
article.appendChild(head1)
article.appendChild(paragraph)
article.appendChild(link)