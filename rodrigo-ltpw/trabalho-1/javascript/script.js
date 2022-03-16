function trocar(caminho, nome, legendas) {
    document.getElementById("imagem_principal").src = caminho;
    document.getElementById("titulo").innerText = nome
    document.getElementById("leg").innerText = legendas
}
