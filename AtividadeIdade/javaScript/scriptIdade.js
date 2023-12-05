function calcularIdade(){
var idade = parseFloat(document.formIdade.idade.value);
let resultado;

if (idade < 18){
    resultado = 'Menor de idade.'
} else if (idade < 25){
    resultado = 'Jovem.'
} else if (idade < 45){
    resultado = 'Jovem Adulto'
} else if (idade < 60){
    resultado = 'Adulto'
} else{
    resultado = 'Você está na terceira Idade!'
}

const caixaresultado = document.getElementById('resultado');
caixaresultado.value = resultado;
}