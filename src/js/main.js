const mDailyXValues = ["Sand", "Cement", "Bricks", "Water", "Nails", "Stones"];
const mDailyYValues = [55, 49, 44, 24, 15, 33];
const mDailyBarColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145",
  "#c4c4c4"
];

new Chart("mDailyChart", {
  type: "doughnut",
  data: {
    labels: mDailyXValues,
    datasets: [{
      backgroundColor: mDailyBarColors,
      data: mDailyYValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Daily Materials cost"
    }
  }
});


const mMonthXValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

new Chart("mMonthChart", {
  type: "line",
  data: {
    labels: mMonthXValues,
    datasets: [{
      data: [860,1140,1060,1000,1060,1070,900,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    },{
      data: [1600,900,1700,1700,1900,800,2000,2700,4000,5000,6000,7000],
      borderColor: "orange",
      fill: false
    },{
      data: [300,700,2000,5000,6000,3000,4000,500,2000,1000,200,100],
      borderColor: "yellow",
      fill: false
    },{
      data: [1110,1330,2210,7830,1070,900,2478,860,1140,1060,1000,1060],
      borderColor: "greeb",
      fill: false
    },{
      data: [2700,4000,5000,6000,1600,2000,7000,900,1700,1700,1900,800],
      borderColor: "purple",
      fill: false
    },{
      data: [6000,2000,1000,200,3000,4000,500,100,300,700,2000,5000],
      borderColor: "black",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});