
let chave = "d3f03dfa5d2a44756ee0afc07e0c0ea8"

function colocarNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
        
}
async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave +
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(resposta => resposta.json())

    colocarNaTela(dados)
}

function cliqueNoBotao(){
    let cidade = document.querySelector(".input-cidade").value
    console.log(cidade)
    buscarCidade(cidade)
}
