//💪 Atividade - 🧠 Administrando Concessionária.
const carros = [
    {
        modelo: "Ka",
        marca: "Ford",
        ano: "2000",
        cor: "Branco",
        completo: false,
        acessorios: ['Vidro Elétrico'],
        preco: 'R$ 6.799,33'
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: false,
        acessorios: ['Trava'],
        preco: 'R$ 12.199,13'
    },
    {
        modelo: "Palio",
        marca: "Fiat",
        ano: "1995",
        cor: "Verde",
        completo: false,
        acessorios: [],
        preco: 'R$ 11.099,11'
    },
    {
        modelo: "Monza",
        marca: "Chevrolet",
        ano: "1993",
        cor: "Vinho",
        completo: false,
        acessorios: [],
        preco: 'R$ 14.578,25'
    },
    {
        modelo: "Saveiro",
        marca: "VW",
        ano: "2013",
        cor: "Prata",
        completo: false,
        acessorios: [],
        preco: 'R$ 28.399,13'
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 'R$ 14.350,45'
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "2013",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 'R$ 22.109,21'
    },
    {
        modelo: "Montana",
        marca: "Chevrolet",
        ano: "2011",
        cor: "Azul",
        completo: false,
        acessorios: [],
        preco: 'R$ 15.999,13'
    },
    {
        modelo: "Stilo",
        marca: "Fiat",
        ano: "2000",
        cor: "Preto",
        completo: false,
        acessorios: [],
        preco: 'R$ 17.251,36'
    }
]
function contaTotal() {
    let total = 0;
    for (let i = 0; i <= carros.length; i++) {
        total = i
    } return total

}
console.log(contaTotal())

function precoTotal(precoCarros) {
    let soma = 0;
    for (let i = 0; i < precoCarros.length; i++) {
        soma += Number(precoCarros[i].preco.replace('R$ ', '').replace('.', '').replace(',', '.'))
    } return `R$${soma.toFixed(2)}`
}
console.log(precoTotal(carros))

function filtraPorMarca(marcaCarro, match) {
    let lista = []
    for (let i = 0; i < marcaCarro.length; i++) {
        if (marcaCarro[i].marca == match) {
            lista.push(marcaCarro[i])
        }
    } return lista
}
console.log(filtraPorMarca(carros, 'VW'))

function filtraPorAcessorio(carAcessorios, busca) {
    let listaA = []
    for (let i = 0; i < carAcessorios.length; i++) {
        for (let j = 0; j < carAcessorios[i].acessorios.length; j++) {
            if (carAcessorios[i].acessorios[j] == busca) {
                listaA.push(carAcessorios[i])
            }
        }
    } return listaA

}
console.log(filtraPorAcessorio(carros, 'Trava'))

function eCarroCompleto(completos) {
    let arrCompleto = []
    for (let i = 0; i < completos.length; i++) {
        if (completos[i].completo == true) {
            arrCompleto.push(completos[i])
        }
    } return arrCompleto
}
console.log(eCarroCompleto(carros))

function adicionaCarro(concess) {
    concess.push(
        {
            modelo: "Pulse",
            marca: "Fiat",
            ano: "2022",
            cor: "Preto",
            completo: true,
            acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
            preco: 'R$ 119.251,36'
        })
    return carros
}
console.log(adicionaCarro(carros))

function removeCarro(listaConcessionaria, index) {
    if (index > listaConcessionaria.length || index <= 0) {
        return 'Não foi possivel encontrar nenhum veiculo no índice procurado'
    } else {
        carros.splice(index - 1, 1)
    } return carros


}
console.log(removeCarro(carros, 1))

function contaCarrosNovos(listaCarrosNovos) {
    let cont = 0
    for (let i = 0; i < listaCarrosNovos.length; i++) {
        let idade = 2022 - listaCarrosNovos[i].ano
        if (idade < 10) {
            cont++
        }
    } return cont
}
console.log(contaCarrosNovos(carros))

function contaCarrosVelhos(listaCarrosNovos) {
    let cont = 0
    for (let i = 0; i < listaCarrosNovos.length; i++) {
        let idade = 2022 - listaCarrosNovos[i].ano
        if (idade > 10) {
            cont++
        }
    } return cont
}
console.log(contaCarrosVelhos(carros))


function insereDono(list, person) {
    for (let i = 0; i < list.length; i++) {
        list[i].donos = person
    }
    return list
}

console.log(insereDono(carros, { nome: 'Jhon Dhoe', cpf: '122-133-144-55' }))
