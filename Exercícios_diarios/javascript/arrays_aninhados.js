//let esposinha = ['sabonete', 'papel', 'pasta', 'desodorante','escovas' ]
//let dreic = ['arroz', 'feijao' ,'batata','leite','agua']
//let conca = ['bandAid', 'esparadrapo', 'alcool', 'gaze', 'mertiolate']
//let bruno = ['bola', 'war', 'xadrez', 'kindle', 'nintendoDS']

let esposinha = ['sabonete', 'papel', 'pasta', 'desodorante','escovas' ]
let dreic = ['arroz', 'feijao' ,'batata','leite','agua']
let conca = ['bandAid', 'esparadrapo', 'alcool', 'gaze', 'mertiolate']
let bruno = ['bola', 'war', 'xadrez', 'kindle', 'NintendoDS']
let amigos = ['Winnie','Dreic','Conça','Bruno']
let caixa = [esposinha,dreic,conca,bruno]
console.table(caixa)

for (let i = 0;i<caixa.length;i++){
   // console.log(caixa[i])
for(let j = 0; j< caixa[i].length;j++){

    if(caixa[i].length !== 5){
        if(caixa[i].length > 5){
            alert(`${amigos[i]} Você deverá devolver ${(caixa[i].length-5)} itens`)
            break;
        }
        alert(`${amigos[i]} Você deverá trazer mais ${5-caixa[i].length } itens`)
        break
    }
    //console.log(caixa[i][j])
}

}
