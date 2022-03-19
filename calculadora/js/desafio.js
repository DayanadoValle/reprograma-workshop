
function calcularValorHora(){

    var inputValor = document.getElementById("valorHora").value;

    var inputHoras = document.getElementById("horasProjeto").value;

    var spanHora = (inputValor * inputHoras).toFixed(2);

    document.getElementById("resposta").innerHTML = 'R$' + spanHora
}
