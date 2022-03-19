let entrada = document.querySelector('input');


let ano = entrada.value;


let saida = document.querySelector('#respostaAno');

function cliquei(){
    let ano = entrada.value  ;
    saida.textContent = "Resposta: " + ano;
}

