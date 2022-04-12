function calculos(form) {
    form.login.value = form.login.value.toUpperCase(); 

    //ENTRADA DE DADOS=======================================================
    pagamento = form.pagamento.value;

    quant1 = form.quant1.value;
    quant2 = form.quant2.value;
    quant3 = form.quant3.value;
    quant4 = form.quant4.value;    

    //PROCESSAMENTO==========================================================
    tot1 = quant1 * 300;
    tot2 = quant2 * 700;
    tot3 = quant3 * 650;
    tot4 = quant4 * 299;

    if (pagamento == "dinheiro") {
        perc = 0.15
    } else {
        perc = 0
    }
    if (pagamento == "cartao") {
        document.getElementById("card").style.display = "block"
    } else {
        document.getElementById("card").style.display = "none"
    }
    
    total = tot1 + tot2 + tot3 + tot4;
    desconto = total * perc;
    apagar = total - desconto;

    //SAÍDA==================================================================

    form.tot1.value = "R$" + tot1.toFixed(2).replace(".",",");
    form.tot2.value = "R$" + tot2.toFixed(2).replace(".",",");
    form.tot3.value = "R$" + tot3.toFixed(2).replace(".",",");
    form.tot4.value = "R$" + tot4.toFixed(2).replace(".",",");

    document.getElementById("total").value = total.toFixed(2).replace(".",",");
    document.getElementById("desconto").value = desconto.toFixed(2).replace(".",",");
    document.getElementById("apagar").value = apagar.toFixed(2).replace(".",",");

}

function confirma(form) {
    total = form.total.value;
    senha1 = form.senha1.value;
    digitos = senha1.length

    if (form.login.value == "") {
        alert("O campo nome é obrigatório.");
        form.login.focus()
        return false;

    } else if (digitos < 8) {
        alert("A senha deve conter no mínimo 8 digitos.")
        form.senha1.focus()
        return false
    
    } else if (digitos > 10 ) {
        alert("A senha não pode exceder 10 digitos.")
        form.senha1.focus()
        return false
    
    } else if (form.senha1.value == "") {
        alert("O campo senha é obrigatório.");
        form.senha1.focus()
        return false;

    } else if (form.senha1.value != form.senha2.value) {
        alert("As senhas não coincidem.");
        form.senha2.focus()
        return false;

    } else if ((quant1 == 0) && (quant2 == 0) && (quant3 == 0) && (quant4 == 0)) {
        alert("Você precisa solicitar pelo menos 1 produto.");
        form.quant1.focus()
        return false;

    } else {
        if (confirm("Confirma o envio do orçamento no valor de " + "R$" + apagar.toFixed(2))) {
            alert("Orçamento enviado com sucesso!");
            return envio.html;
        } else {
            return false;

        }   
    }
}

function senha() {
    senha1 = document.orcamento.senha1.value;
    senha2 = document.orcamento.senha2.value;
    
    if (senha1 != senha2) {
        document.getElementById("msg").style.display = "block";
    } else {
        document.getElementById("msg").style.display = "none";
    }
}

function pessoa(obj) {
    if (obj == "pf") {
        document.getElementById("cpf").style.display = "block";
        document.getElementById("cnpj").style.display = "none";
    } else {
        document.getElementById("cpf").style.display = "none";
        document.getElementById("cnpj").style.display = "block";
    }
}

function mascara_cpf(obj) {
    if (obj.value.length == 3) {
        obj.value += "."
    }
    if (obj.value.length == 7) {
        obj.value += "."
    }
    if (obj.value.length == 11) {
        obj.value += "-"
    }
}

function mascara_cnpj(obj) {
    if (obj.value.length == 2) {
        obj.value += "."
    }
    if (obj.value.length == 6) {
        obj.value += "."
    }
    if (obj.value.length == 10) {
        obj.value += "/"
    }
    if (obj.value.length == 15) {
        obj.value += "-"
    }
}

function mascara_telefone(obj) {
    if (obj.value.length == 0) {
        obj.value += "("
    }
    if (obj.value.length == 3) {
        obj.value += ")"
    }
    if (obj.value.length == 9) {
        obj.value += "-"
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

function salto(campo,digito) {
    if (campo == "cpf") {
        if (digito.length > 13) {
            document.orcamento.telefone.focus()
        }
    }
}

function somente_numero(e) {
    tecla = (window.event)?event.keyCode:e.which;

    if ((tecla >= 48 && tecla <= 57) || (tecla >= 96 && tecla <= 105) || (tecla == 8) || (tecla >= 37 && tecla <= 39) || (tecla == 46) || (tecla == 116)) {
        return true
    } else {
        return false
    }
}