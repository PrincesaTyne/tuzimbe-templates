export const contractorsList = document.querySelector("tbody");

const contractors = [
  { id: "1", name: "John Doe", email: "john.doe@tuzimbe.com", role: "Manager" },
  { id: "2", name: "Blue Sky", email: "blue.sky@tuzimbe.com", role: "Porter" },
  { id: "3", name: "Green Beans", email: "green.beans@tuzimbe.com", role: "Carpenter" },
  { id: "4", name: "Apple Tree", email: "apple.tree@tuzibe.com", role: "Builder" },
  { id: "5", name: "Qwerty Asdfg", email: "qwerty@tuzimbe.com", role: "Carpenter" },
  { id: "6", name: "May Flower", email: "may.flower@tuzimbe.com", role: "Porter" },

];

contractors.forEach(contractor => {
  contractorsList.innerHTML += `<tr>
      <td>${ contractor.id }</td>
      <td>${ contractor.name }</td>
      <td>${ contractor.email }</td>
      <td>${ contractor.role }</td>
      <td>
        <button class="btn btn-outline-success">View Details</button>
      </td>
    </tr>
  `;
});
