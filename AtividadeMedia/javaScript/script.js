function calcularmedia(){
    const nota1 = parseFloat(document.formMedia.nota1.value);
    const nota2 = parseFloat(document.formMedia.nota2.value);
    let situ;

    const media = parseFloat((nota1 + nota2) / 2);

    if(media < 5){
        situ = 'reprovado.';
    } else if(media <= 8){
        situ = 'aprovado!'
    } else {
        situ = 'aprovado mandando muito!'
    }

    const pcaixaMedia = document.getElementsByClassName('pmedia')[0];
    pcaixaMedia.innerHTML = media

    const pcaixasitu = document.getElementsByClassName('pmedia')[1];
    pcaixasitu.innerHTML = situ
}