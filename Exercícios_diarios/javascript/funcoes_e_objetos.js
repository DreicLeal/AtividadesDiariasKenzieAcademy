//💪 Atividade - 🧠 Exercitando Funções e Objetos
let pessoa = {
    nome: "clara",
    anoNascimento: 1996,
    nomeDeUsuario: "CLARA_GOMES",
    temCarro: true,
    valeCombustivel: "R$ 0,00",
    distanciaDoTrabalho: "120km",
    endereco: []
}

function qualIdade({ anoNascimento }) {
    //Lógica
    let idade = 2022 - anoNascimento
    return idade
}
console.log(qualIdade(pessoa))

function normalizaDado({ nome }) {
    //Lógica
    let nName = nome[0].toUpperCase() + nome.slice(1)
    return nName
}
console.log(normalizaDado(pessoa))


function criandoListaDeUsuarios({ nomeDeUsuario }) {
    let usersList = []
    usersList.push(nomeDeUsuario.toLowerCase())
    return usersList
}
console.log(criandoListaDeUsuarios(pessoa))

function calculaVC({temCarro,distanciaDoTrabalho,valeCombustivel}){
    distanciaDoTrabalho = distanciaDoTrabalho.slice(0,-2)
    if(temCarro){
        valeCombustivel = (distanciaDoTrabalho*6.99)*0.7
    }
    return `Vale combustivel: R$${valeCombustivel}`
} 
console.log(calculaVC(pessoa))

let endereco = {
    cidade: 'Curitiba',
    logradouro: 'Rua Dali',
    numero: 10,
    tipo:[]
  }

  function adicionarTipo({tipo}){
    tipo.push('Casa')
    return endereco
    }
console.log(adicionarTipo(endereco))

function adicionarEnderecoEmPessoa({endereco},enderecoAdd){
    endereco.push(enderecoAdd)
    return pessoa
    }
    console.log(adicionarEnderecoEmPessoa(pessoa,endereco))