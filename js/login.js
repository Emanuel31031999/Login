function fazerLogin() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    const usuarioCadastro = localStorage.getItem("usuarioCadastro");
    const senhaSalva = localStorage.getItem("senhaSalva");

    if (usuario === "" || senha === "") {
      mensagem.textContent = "Por favor, preencha todos os campos.";
      mensagem.className = "erro";
      return;
    }

    if (usuario === usuarioCadastro && senha === senhaSalva) {
      mensagem.textContent = "Login realizado com sucesso!";
      mensagem.className = "sucesso";

      //window.location.href = "imc.html"  
      window.location.href = "menu.html";

    } else {
      mensagem.textContent = "Usuário ou senha inválidos.";
      mensagem.className = "erro";
    }
  }