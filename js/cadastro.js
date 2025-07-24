document.addEventListener("DOMContentLoaded", function () {
  fetch("./data/cidades-brasileiras.json")
      .then(response => response.json())
      .then(data => {
          const datalist = document.getElementById("lista-cidades");
          data.forEach(cidade => {
              const option = document.createElement("option");
              option.value = cidade.nome;
              datalist.appendChild(option);
          });
      })
      .catch(error => {
          console.error("Erro ao carregar cidades:", error);
      });
});
function cadastroUsuario() {
  const nome = document.getElementById("nome").value;
  const cidade = document.getElementById("cidade").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem");

  if (nome === "" || cidade === "" || email === "" || senha === "") {
      mensagem.textContent = "Por favor, preencha todos os campos.";
      mensagem.className = "erro";
      return;
  }

  localStorage.setItem("usuarioCadastro", email);
  localStorage.setItem("senhaSalva", senha);

  mensagem.textContent = "Cadastro realizado com sucesso!";
  mensagem.className = "sucesso";

  console.log("Usuário cadastrado:", {
      nome: nome,
      cidade: cidade,
      email: email,
      senha: senha
  });

  alert("Cadastro realizado com sucesso!");
}


   