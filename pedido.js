document.addEventListener("DOMContentLoaded", function() {
  const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  const selectProduto = document.getElementById("produtoPedido");

  produtos.forEach(produto => {
      let option = document.createElement("option");
      option.value = produto.nome;
      option.textContent = produto.nome;
      selectProduto.appendChild(option);
  });

  document.getElementById("pedidoForm").addEventListener("submit", function(event) {
      event.preventDefault();

      const produto = document.getElementById("produtoPedido").value;
      const quantidade = document.getElementById("quantidadePedido").value;

      const novoPedido = {
          produto: produto,
          quantidade: quantidade,
          status: "Em andamento"
      };

      let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
      pedidos.push(novoPedido);
      localStorage.setItem("pedidos", JSON.stringify(pedidos));

      alert("Pedido criado com sucesso!");
      document.getElementById("pedidoForm").reset();
  });
});
