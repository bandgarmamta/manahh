var xValues = ["Correct", "Incorrect"];
var yValues = [55, 49];
var barColors = [
  "#22c55e",
  "#ef4444",
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "RESULTS",
      fontSize: 40,
      fontFamily: "Montserrat",
      fontColor: "#3f3d56" 
    },
    legend:{
      labels: {
        fontSize: 18,
        fontFamily: "Montserrat",
        fontColor:'#3f3d56'
      }
    }
    
    
}
    
});