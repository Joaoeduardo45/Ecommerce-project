document.getElementById("cadastroForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const novoCliente = {
      nome: nome,
      email: email,
      senha: senha
  };

  let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
  clientes.push(novoCliente);
  localStorage.setItem("clientes", JSON.stringify(clientes));

  alert("Cliente cadastrado com sucesso!");
  document.getElementById("cadastroForm").reset();
});

