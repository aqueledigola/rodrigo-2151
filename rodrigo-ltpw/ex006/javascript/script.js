function pessoa(obj) {
    if (obj == "pf") {
        document.getElementById("inputCpf").style.display = "block";
        document.getElementById("inputCnpj").style.display = "none";
    } else {
        document.getElementById("inputCpf").style.display = "none";
        document.getElementById("inputCnpj").style.display = "block";
    }
}

// MÁSCARAS DE DÍGITOS =============================
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
