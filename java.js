
let chave = "d3f03dfa5d2a44756ee0afc07e0c0ea8"

function colocarNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".nuvem").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umid").innerHTML = "Umidade: " + Math.floor (dados.main.humidity) + "%"
    
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
//finalizado//