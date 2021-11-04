const materialsReportList = document.querySelector(".materials-report-tbody");

const materialsReport = [
  { id: "1", name: "Sand", quantity: "50",  date: ""},
  { id: "2", name: "Cement", quantity: "300",   date: ""},
  { id: "3", name: "Bricks", quantity: "50", date: ""},
  { id: "4", name: "Water", quantity: "3000",  date: "" },
  { id: "5", name: "Nails", quantity: "100",  date: ""},
  { id: "6", name: "Stones", quantity: "50", date: ""},

];

materialsReport.forEach(materialReport => {
  materialsReportList.innerHTML += `<tr>
      <td>${ materialReport.id }</td>
      <td>${ materialReport.name }</td>
      <td>${ materialReport.quantity }</td>
      <td>${ materialReport.date }</td>
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
