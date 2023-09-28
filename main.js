function validarForm() {
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);
    var mensagem = document.getElementById("mensagem");

    if (isNaN(campoA) || isNaN(campoB)) {
        mensagem.textContent = "Por favor, insira números válidos em ambos os campos.";
    } else if (campoB > campoA) {
        mensagem.textContent = "Formulário válido! B é maior que A.";
    } else {
        mensagem.textContent = "Formulário inválido. B deve ser maior que A.";
    }
}