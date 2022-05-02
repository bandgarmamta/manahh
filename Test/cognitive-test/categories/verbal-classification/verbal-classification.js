// 15,22,10,1/8,20

const correctAnswers = ["book", "important", "beak", "hate", "biased"];
const formData = document.querySelector(".test-form");
const btnSubmit = document.querySelector(".btn-submit");
const qtOneOptions = document.querySelectorAll(".qt-one");
const qtTwoOptions = document.querySelectorAll(".qt-two");
const qtThreeOptions = document.querySelectorAll(".qt-three");
const qtFourOptions = document.querySelectorAll(".qt-four");
const qtFiveOptions = document.querySelectorAll(".qt-five");
const questionTracker = document.querySelectorAll(".question-number");

var score = 0;

function calculateScore() {
    score = 0;
    let x = 0;
    const formvalue = new FormData(formData);

    for (let i of formvalue.values()) {

        if (i === correctAnswers[x]) {
            score = score + 1;
        }
        x = x + 1;
    }

    localStorage.setItem('score', score);

}
btnSubmit.addEventListener('click', calculateScore);
qtOneOptions.forEach(option => {
    option.addEventListener("click", () => {
        questionTracker[0].style.backgroundColor = "#77DD77";
    })
})
qtTwoOptions.forEach(option => {
    option.addEventListener("click", () => {
        questionTracker[1].style.backgroundColor = "#77DD77";
    })
})
qtThreeOptions.forEach(option => {
    option.addEventListener("click", () => {
        questionTracker[2].style.backgroundColor = "#77DD77";
    })
})
qtFourOptions.forEach(option => {
    option.addEventListener("click", () => {
        questionTracker[3].style.backgroundColor = "#77DD77";
    })
})
qtFiveOptions.forEach(option => {
    option.addEventListener("click", () => {
        questionTracker[4].style.backgroundColor = "#77DD77";
    })
})