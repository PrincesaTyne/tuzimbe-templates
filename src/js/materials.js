const materilalsList = document.querySelector(".materials-tbody");

const materials = [
  { id: "1", name: "Sand", quantity: "50", units: "Tonnes", price: "100000" },
  { id: "2", name: "Cement", quantity: "300", units: "Bags", price: "20000" },
  { id: "3", name: "Bricks", quantity: "50", units: "Tonnes", price: "100000" },
  { id: "4", name: "Water", quantity: "3000", units: "Litres", price: "500" },
  { id: "5", name: "Nails", quantity: "100", units: "Kgs", price: "20000" },
  { id: "6", name: "Stones", quantity: "50", units: "Tonnes", price: "100000" },

];

materials.forEach(material => {
  materilalsList.innerHTML += `<tr>
      <td>${ material.id }</td>
      <td>${ material.name }</td>
      <td>${ material.quantity } ${ material.units }</td>
      <td>${ material.price }</td>
      <td>
        <button class="btn btn-outline-success item">View Details</button>
      </td>
    </tr>
  `;
});

const buttons = document.querySelectorAll(".item");

buttons.forEach((item) => {
  item.addEventListener("click", function(e) {
    // console.log(materials[index]);
    console.log(e.target);
    location.href = "materialProfile.html";
  });
});
