// 15,22,10,1/8,20

const correctAnswers = ["If only I follows", "If only II follows", "If neither I nor II follows", "If only II follows", "If both I and II follow"];
localStorage.setItem('correctAnswers', JSON.stringify(correctAnswers));
const testQuestions = [` Q1. The ‘A’ state government has chalked out a plan for the underdeveloped ‘B’ district where 66% of the funds will be placed in the hands of a committee of local representatives.
Courses of action:
I. The ‘A’ state government should decide guidelines and norms for the functioning of the committee.
II. Other state government may follow similar plan if directed by the Central government.`,
    ` Q2. The car dealer found that there was a tremendous response for the new XYZ’s car booking with long queues of people complaining about the duration of business hours and arrangements. Courses of action:
    I. People should make their arrangement of lunch and snacks while going for car XYZ’s booking and be ready to spend several hours.
    II. Arrangement should be made for more booking desks and increase business hours to serve more people in less time.`,
    `Q3. The ‘M’ state government has decided hence forth to award the road construction contracts through open tenders only. Courses of action:
    I. The ‘M’ state will not be able to get the work done swiftly as it will have to go through tender and other procedures.
    II. Hence forth the quality of roads constructed may be far better.`,
    `Q4.  Alert villagers nabbed a group of bandits armed with murderous weapons. Courses of action:
    I. The villagers should be provided sophisticated weapons.
    II. The villagers should be rewarded for their courage and unity. `,
    ` Q5. 10 coaches of a passenger train have got derailed and have blocked the railway track from both ends. Courses of action:
    I. The railway authorities should immediately send men and equipment and clear the spot
    II. All the trains running in both directions should be diverted immediately via other routes.`]
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
        userAnswers.push(i);
        if (i === correctAnswers[x]) {
            score = score + 1;
        }
        x = x + 1;
    }
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers))
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