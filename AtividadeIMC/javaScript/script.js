function calcularIMC(){
let nomeusuario = document.querySelector('.input-nome').value;
let pesousuario = parseFloat(document.querySelector('.input-peso').value.replace(',','.'));
let alturausuario = parseFloat(document.querySelector('.input-altura').value.replace(',','.'));

let resultadoIMC = (pesousuario / alturausuario**2).toFixed(2);
let grau, nivel;
console.log(resultadoIMC);

if (resultadoIMC < 18.5) {
    grau = 0;
    nivel = 'Magreza';
} else if (resultadoIMC < 25) {
    grau = 0;
    nivel = 'Normal';
} else if (resultadoIMC < 30) {
    grau = 1;
    nivel = 'Sobrepeso';
} else if (resultadoIMC <40) {
    grau = 2;
    nivel = 'Obesidade';
} else {
    grau = 3;
    nivel = 'Obesidade Grave';
}

let mensagem = `${nomeusuario}, seu IMC é ${resultadoIMC}! Resultado: ${nivel} Grau de Obesidade: ${grau}`;

document.querySelector('.resultado').innerHTML = mensagem;
}