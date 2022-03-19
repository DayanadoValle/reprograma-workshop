let inputGanhoPorMes = document.querySelector('#ganho-mes');
let  inputHorasDia = document.querySelector('#horas-dia');

let spanHora = document.querySelector('#resposta ');

function   calcularValorHora(){
    let  qtdTotalDeHoras = inputHorasDia.valueAsNumber *22;

    let  valorDeHora = (inputGanhoPorMes.valueAsNumber / qtdTotalDeHoras).toFixed(2);

    spanHora.textContent = "R$ "  + valorDeHora;
    }

