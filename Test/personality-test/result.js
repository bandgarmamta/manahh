var xValues = ["Correct", "Incorrect"];
var accuracy = localStorage.getItem('accuracy');
var personality = localStorage.getItem('personality');
var remaining_accuracy = 100 - accuracy;
var yValues = [accuracy,remaining_accuracy];
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
      text: "Predicted Personality: "+ personality,
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