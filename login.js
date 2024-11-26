document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const emailLogin = document.getElementById("emailLogin").value;
  const senhaLogin = document.getElementById("senhaLogin").value;

  let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

  const cliente = clientes.find(c => c.email === emailLogin && c.senha === senhaLogin);

  if (cliente) {
      alert("Login bem-sucedido!");
      // Redirecionar para a página de pedidos ou outro módulo
  } else {
      alert("Email ou senha inválidos!");
  }
});
