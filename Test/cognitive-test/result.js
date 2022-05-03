var xValues = ["Correct", "Incorrect"];
var score = localStorage.getItem('score');
var remaining_score = 5 - score;
var yValues = [score, remaining_score];
var barColors = [
  "#22c55e",
  "#ef4444",
];
const question = document.querySelectorAll(".question-desc");
const yourAnswer = document.querySelectorAll(".your-answer");
const correctAnswerField = document.querySelectorAll(".correct-answer");
const correctAnswers = localStorage.getItem('correctAnswers');
const finalAnswers = JSON.parse(correctAnswers);
const userValues = localStorage.getItem("userAnswers");
const userAnswers = JSON.parse(userValues);
const questions = localStorage.getItem("testQuestions");
const testQuestions = JSON.parse(questions)
question.forEach((qt, index) => qt.textContent = testQuestions[index])
yourAnswer.forEach((ans, index) => ans.textContent = "Your answer: " + userAnswers[index])
correctAnswerField.forEach((ans, index) => ans.textContent = "Correct answer: " + finalAnswers[index])


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
    legend: {
      labels: {
        fontSize: 18,
        fontFamily: "Montserrat",
        fontColor: '#3f3d56'
      }
    }


  }

});