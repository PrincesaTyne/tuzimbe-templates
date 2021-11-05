const contractorsReportList = document.querySelector(".contractors-report-tbody");



const contractorsReport = [
  { id: "1", name: "Johhhn Doe", toa: "", tod: "", hours: "5", },
  { id: "2", name: "Blue Sky", toa: "", tod: "", hours: "4",  },
  { id: "3", name: "Green Beans", toa: "", tod: "", hours: "5", },
  { id: "4", name: "Apple Tree", toa: "", tod: "", hours: "3",},
  { id: "5", name: "Qwerty Asdfg", toa: "", tod: "", hours: "6",},
  { id: "6", name: "May Flower", toa: "", tod: "", hours: "4", },

];

contractorsReport.reverse().forEach(contractorReport => {
  contractorsReportList.innerHTML += `<tr>
      <td>${ contractorReport.id }</td>
      <td>${ contractorReport.name }</td>
      <td>${ contractorReport.toa }</td>
      <td>${ contractorReport.tod }</td>
      <td>${ contractorReport.hours }</td>
      <td>
        <button class="btn btn-outline-success item">View Details</button>
      </td>
    </tr>
  `;
});

const buttons = document.querySelectorAll(".item");

buttons.forEach((item) => {
  item.addEventListener("click", function(e) {
    // console.log(contractors[index]);
    console.log(e.target);
    location.href = "contractorProfile.html";
  });
});
