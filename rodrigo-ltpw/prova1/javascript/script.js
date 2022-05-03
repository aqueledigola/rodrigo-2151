function calculos(form) {
    //ENTRADA DE DADOS =======================================================
    pagamento = form.pagamento.value;
    selectPlano = form.selectPlano.value;
    let total = document.getElementById("total").value

    //PROCESSAMENTO ==========================================================
    if (pagamento == "1") {
        perc = 0.15;
    } else {
        perc = 0;
    }
    if (pagamento == "2") {
        document.getElementById("cart1").style.display = "block";
        document.getElementById("cart2").style.display = "block";
        document.getElementById("cart3").style.display = "block";
    } else {
        document.getElementById("cart1").style.display = "none";
        document.getElementById("cart2").style.display = "none";
        document.getElementById("cart3").style.display = "none";
    }
    if (selectPlano == "selectBasico") {
        total = 25

    } else if (selectPlano == "selectPadrao") {
        total = 39.9

    } else {
        total = 59.9
        
    }
    
    desconto = total * perc;
    apagar = total - desconto;

    //SAÍDA DE DADOS =========================================================

    document.getElementById("total").value = total.toFixed(2).replace(".",",");
    document.getElementById("desconto").value = desconto.toFixed(2).replace(".",",");
    document.getElementById("apagar").value = apagar.toFixed(2).replace(".",",");

}

function confirma(form) {
    inputSenha1 = form.inputSenha1.value;
    digitos = inputSenha1.length;
    
    if (digitos < 8) {
        alert("A senha deve conter no mínimo 8 digitos.")
        form.inputSenha1.focus();
        return false;
    
    } else if (digitos > 10 ) {
        alert("A senha não pode exceder 10 digitos.")
        form.inputSenha1.focus();
        return false;
    
    } else if (form.inputSenha1.value != form.inputSenha2.value) {
        alert("As senhas não coincidem.");
        form.inputSenha2.focus();
        return false;

    }
}

function senha() {
    senha1 = form.inputSenha1.value;
    senha2 = form.inputSenha2.value;

    if (senha1 != senha2) {
        document.getElementById("msg").style.display = "block";
    } else {
        document.getElementById("msg").style.display = "none";
    }
}

function plano1(obj) {
    document.getElementById("basico").style.backgroundColor = "rgb(221, 0, 0)";
    document.getElementById("padrao").style.backgroundColor = "rgba(221, 0, 0, 0.7)";
    document.getElementById("premium").style.backgroundColor = "rgba(221, 0, 0, 0.7)";
    
}

function plano2(obj) {
    document.getElementById("basico").style.backgroundColor = "rgba(221, 0, 0, 0.7)";
    document.getElementById("padrao").style.backgroundColor = "rgb(221, 0, 0)";
    document.getElementById("premium").style.backgroundColor = "rgba(221, 0, 0, 0.7)";

}

function plano3(obj) {
    document.getElementById("basico").style.backgroundColor = "rgba(221, 0, 0, 0.7)";
    document.getElementById("padrao").style.backgroundColor = "rgba(221, 0, 0, 0.7)";
    document.getElementById("premium").style.backgroundColor = "rgb(221, 0, 0)";

    
}

function somente_letra(e) {
    tecla = (window.event)?event.keyCode:e.which;

    if ((tecla >= 65 && tecla <= 90) || (tecla >= 97 && tecla <= 122) || (tecla == 32) || (tecla == 8) || (tecla >= 37 &&  tecla <= 40) || (tecla == 116)) {
        return true
    } else {
        return false
    }
}

function somente_num(e) {
    tecla = (window.event)?event.keyCode:e.which;

    if ((tecla >= 48 && tecla <= 57) || (tecla >= 96 && tecla <= 105) || (tecla == 8) || (tecla >= 37 && tecla <= 39) || (tecla == 46) || (tecla == 116)) {
        return true
    } else {
        return false
    }

}

function mascara_cartao(obj) {
    if (obj.value.length == 4) {
        obj.value += " "
    }
    if (obj.value.length == 9) {
        obj.value += " "
    }
    if (obj.value.length == 14) {
        obj.value += " "
    }
}

function mascara_venc(obj) {
    if (obj.value.length == 2) {
        obj.value += "/"
    }
}

