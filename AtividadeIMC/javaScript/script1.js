const botaoCalcularIMC = document.querySelector('.btn-calcular');
let nomeusuario,pesousuario,alturausuario;

botaoCalcularIMC.addEventListener('click',()=>{
    nomeusuario = document.querySelector('.input-nome').value;
    pesousuario = parseFloat(document.querySelector('.input-peso').value.replace(',','.'));
    alturausuario = parseFloat(document.querySelector('.input-altura').value.replace(',','.'));

    mostrarResultadoIMC();

});

function calcularIMC(peso, altura) {
    return imc = (peso / altura ** 2).toFixed(2);
}

function verGrauObesidade (imc) {
    if(imc < 18.5) {
        return 'Grau 0 - Magreza';
    } else if (imc < 25) {
        return 'Grau 0 - Normal';
    } else if (imc < 30) {
        return 'Grau 1 - Sobrepreso';
    } else if (imc < 40) {
        return 'Grau 2 - Obesidade';
    } else {
        return 'Grau 3 - Obesidade Grave';
    }
}

function mostrarResultadoIMC(){
    let imc = calcularIMC(pesousuario, alturausuario);
    let grauObesidade = verGrauObesidade(imc);
    mensagem = `${nomeusuario}, seu IMC é ${imc}! ${grauObesidade}`;
    document.querySelector('.resultado').innerHTML = mensagem;
}