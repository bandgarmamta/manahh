// 15,22,10,1/8,20

const correctAnswers = ["book", "important", "beak", "hate", "biased"];
localStorage.setItem('correctAnswers', JSON.stringify(correctAnswers));
const testQuestions = [` Q1. Which word does NOT belong with the others?`,
    `Q2. Which word is the odd man out?`,
    `Q3. Which word does NOT belong with the others?`,
    `Q4. Which word is the odd man out?`,
    ` Q5. Pick the odd man out?`]
localStorage.setItem("testQuestions", JSON.stringify(testQuestions));
const userAnswers = [];
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
        userAnswers.push(i)
        if (i === correctAnswers[x]) {
            score = score + 1;
        }
        x = x + 1;
    }
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
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