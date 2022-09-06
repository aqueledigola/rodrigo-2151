function confirma(form) {
    inputSenha = form.inputSenha.value;
    digitos = inputSenha.length
    
    if (digitos < 8) {
        alert("A senha deve conter no mínimo 8 digitos.")
        form.inputSenha.focus()
        return false
    
    } else if (digitos > 10 ) {
        alert("A senha não pode exceder 10 digitos.")
        form.inputSenha.focus()
        return false
    
    } else if (form.inputSenha.value != form.inputSenha2.value) {
        alert("As senhas não coincidem.");
        form.inputSenha2.focus()
        return false

    }
}
function senha() {
    senha1 = form.inputSenha.value
    senha2 = form.inputSenha2.value

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
