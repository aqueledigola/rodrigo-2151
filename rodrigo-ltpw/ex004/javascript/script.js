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
    
    total = tot1 + tot2 + tot3 + tot4;
    desconto = total * perc;
    apagar = total - desconto;

    //SAÍDA==================================================================

    form.tot1.value = "R$" + tot1.toFixed(2);
    form.tot2.value = "R$" + tot2.toFixed(2);
    form.tot3.value = "R$" + tot3.toFixed(2);
    form.tot4.value = "R$" + tot4.toFixed(2);

    document.getElementById("total").value = total.toFixed(2);
    document.getElementById("desconto").value = desconto.toFixed(2);
    document.getElementById("apagar").value = apagar.toFixed(2);

}

function confirma(form) {
    total = form.total.value;

    if (form.login.value == "") {
        alert("O campo nome é obrigatório.");
        form.login.focus()
        return false;

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

/*if (senha1[Text.length] < 8) {
    alert("A senha deve conter no mínimo 8 digitos.")
    form.senha1.focus()
    return false

} else if (senha1[Text.length] > 10 ) {
    alert("A senha não pode exceder 10 digitos.")
    form.senha1.focus()
    return false

}*/