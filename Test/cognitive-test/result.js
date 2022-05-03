var xValues = ["Correct", "Incorrect"];
var score = localStorage.getItem('score');
var remaining_score = 5 - score;
var yValues = [score,remaining_score];
var barColors = [
  "#22c55e",
  "#ef4444",
];
const correctAnswer = document.querySelectorAll(".correct-ans");
const answers = localStorage.getItem('correctAnswers');
const finalAnswers = JSON.parse(answers);
correctAnswer.forEach((ans,index) => {
  ans.textContent = finalAnswers[index];
})
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