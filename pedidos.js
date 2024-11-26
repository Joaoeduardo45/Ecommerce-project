document.addEventListener("DOMContentLoaded", function() {
  const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
  const tableBody = document.querySelector("#pedidosTable tbody");

  pedidos.forEach(pedido => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${pedido.produto}</td>
          <td>${pedido.quantidade}</td>
          <td>${pedido.status}</td>
      `;
      tableBody.appendChild(row);
  });
});
