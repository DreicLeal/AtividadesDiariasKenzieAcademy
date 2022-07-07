let carro = {
    marca: 'Ford',
    ano: 2010,
    modelo: 'KA',
    cor: 'Azul',
    donos: []
}

let pessoa = {
    nome: 'Dreic',
    nascimento: 1991,
    cpf: '03829208561',
    cidade: 'Salvador',
    estado: 'Bahia',
    logradouro: 'Rua da Paz',
}
let pessoa2 = {
    nome: 'Winnie',
    nascimento: 1992,
    cpf: '03829208561',
    cidade: 'Salvador',
    estado: 'Bahia',
    logradouro: 'Rua da Paz',
}

let escola = {
    nome: 'Kenzie',
    cnpj: '19807643520',
    area: 'TI',
    cidade: "Curitiba",
    estado: 'Paraná',
    logradouro: 'Rua sem nome',
    curso: 'Full Stack',
}

let curso = {
    nome: 'Full stack',
    duracao: 03,
    turma: 13,
    mosulos: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6'],
}

let endereco = {
    cidade: 'Salvador',
    estado: 'Bahia',
    logradouro: 'Rua das Acacias',
    cep: '41100-720',
}

let turma = {
    professores: ['Hudson', 'Dorival', 'Thiago'],
    alunos: [pessoa, pessoa2],
    dInicio: '10/05/2022',
    formatura: '10/05/2023',
}
console.log(turma.alunos[1])