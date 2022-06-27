
let passosDados = 1
let i = 10


function verificaCasa(passos,casa){
    passos = 10;
    casa = 1
    if (passos <= 0){
        console.log(`Por favor entre com um inteiro maior que 0, você digitou: ${passos}`)
    }
    while (casa <= passos){
        console.log(`Visitei a ${casa}ª casa.`)
        casa++
    }

}
verificaCasa(passosDados,i)

function voltaCasa(passosVoltando,casaVoltando){

    if (casaVoltando > passosVoltando && casaVoltando !== 1){
        console.log(`Iniciei na ${casaVoltando}ª casa`)
        while (casaVoltando > passosVoltando){
            casaVoltando--
            console.log(`Voltei até a ${casaVoltando}ª casa.`)
        }
    } else {
    console.log(`Por favor entre com um inteiro maior que 1, você digitou: ${passosVoltando}`)
}
    }
    let passosRetorno = 1;
    let casaVolta = 10

voltaCasa(passosRetorno,casaVolta)