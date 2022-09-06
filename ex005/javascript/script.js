function calc() {
    //ENTRADA

    horario = document.form.horario.value;

    //PROCESSAMENTO

    if (horario == "manha") {
        valor = 1500; 
    } else if (horario == "tarde") {
        valor = 1800;
    } else {
        valor = 2300;
    }

    //SAÍDA

    document.getElementById("total").value = valor;

    document.getElementById("gul").checked = false;
    document.getElementById("pers").checked = false;
    document.getElementById("atr").checked = false;
    document.getElementById("maq").checked = false;
    document.getElementById("brin").checked = false;
}

function opc(valor,marcado) {
    //ENTRADA

    total = document.getElementById("total").value;


    //PROCESSAMENTO

    if (marcado) {
        total = Number(total) + Number(valor)
    } else {
        total = Number(total) - Number(valor)
    }

    //SAÍDA

    total = document.getElementById("total").value = total;

}

function trocatema() {
    
    //ENTRADA
    tema = document.getElementById("tema").value;

    //PROCESSAMENTO
    if (tema == "tema1") {
        titulo = "Carros";
        newFundo = "img/relampago.jpg";
        newFoto = "img/relampagoicon.png";

        altura = "50%";
        right = "-20px";
        bottom = "0"

    } else if (tema == "tema2") {
        titulo = "Shrek";
        newFundo = "img/shrek.jpg";
        newFoto = "img/shrekicon.png";

        altura = "60%";
        right = "-5px";
        bottom = "0"

    } else {
        titulo = "Patrulha Canina";
        newFundo = "img/patrulha_canina.jpg";
        newFoto = "img/patrulhaicon.png";

        altura = "60%";
        right = "-5px";
        bottom = "0"

    }

    //SAÍDA
    document.getElementById("titulo").value = titulo;
    document.body.style.backgroundImage = "url(" + newFundo + ")";
    document.getElementById("foto").src = newFoto;

    document.getElementById("foto").style.height = altura
    document.getElementById("foto").style.right = right
    document.getElementById("foto").style.bottom = bottom
}