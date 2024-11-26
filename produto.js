document.getElementById("produtoForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nomeProduto = document.getElementById("nomeProduto").value;
  const precoProduto = document.getElementById("precoProduto").value;

  const novoProduto = {
      nome: nomeProduto,
      preco: precoProduto
  };

  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  produtos.push(novoProduto);
  localStorage.setItem("produtos", JSON.stringify(produtos));

  alert("Produto cadastrado com sucesso!");
  document.getElementById("produtoForm").reset();
});
