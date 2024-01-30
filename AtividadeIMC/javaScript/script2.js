const botaoCalcularIMC = document.querySelector('.btn-calcular');

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

botaoCalcularIMC.addEventListener('click',()=>{
    const nomeusuario = document.querySelector('.input-nome').value;
    const pesousuario = parseFloat(document.querySelector('.input-peso').value.replace(',','.'));
    const alturausuario = parseFloat(document.querySelector('.input-altura').value.replace(',','.'));

    let imc = calcularIMC(pesousuario, alturausuario);
    let grauObesidade = verGrauObesidade(imc);
    mensagem = `${nomeusuario}, seu IMC é ${imc}! ${grauObesidade}`;

    //adicionando uma nova classe dinamicamente através de JS
    document.querySelector('.resultado').classList.add('destaque');
    
    document.querySelector('.resultado').innerHTML = mensagem;
})
