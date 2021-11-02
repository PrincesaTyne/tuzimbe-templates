export const contractorsList = document.querySelector("tbody");

const contractors = [
  { id: "1", name: "John Doe", email: "john.doe@tuzimbe.com", age: "45", sex: "Female", role: "Manager" },
  { id: "2", name: "Blue Sky", email: "blue.sky@tuzimbe.com", age: "18", sex: "Male", role: "Porter" },
  { id: "3", name: "Green Beans", email: "green.beans@tuzimbe.com", age: "28", sex: "Female", role: "Carpenter" },
  { id: "4", name: "Apple Tree", email: "apple.tree@tuzibe.com", age: "30", sex: "Male", role: "Builder" },
  { id: "5", name: "Qwerty Asdfg", email: "qwerty@tuzimbe.com", age: "25", sex: "Female", role: "Carpenter" },
  { id: "6", name: "May Flower", email: "may.flower@tuzimbe.com", age: "34", sex: "Male", role: "Porter" },

];

contractors.forEach(contractor => {
  contractorsList.innerHTML += `<tr>
      <td>${ contractor.id }</td>
      <td>${ contractor.name }</td>
      <td>${ contractor.email }</td>
      <td>${ contractor.age }</td>
      <td>${ contractor.sex }</td>
      <td>${ contractor.role }</td>
      <td>
        <button class="btn btn-outline-success">View Details</button>
      </td>
    </tr>
  `;
});
