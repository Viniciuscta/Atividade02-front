function validarFormulario() {
    var nome = document.getElementById("nome").value.trim();
    var email = document.getElementById("email").value.trim();
    var mensagem = document.getElementById("mensagem").value.trim();

    // Verificar se os campos estão vazios
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    // Verificar formato do e-mail usando uma expressão regular
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return false;
    }

    // Verificar se a mensagem tem pelo menos 10 caracteres
    if (mensagem.length < 3) {
        alert("A mensagem deve conter pelo menos 3 caracteres.");
        return false;
    }
    // Se todas as verificações passarem, o formulário é válido
    return true;
}