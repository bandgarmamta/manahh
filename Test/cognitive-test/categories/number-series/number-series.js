// 15,22,10,1/8,20

const correctAnswers = ["15","22","10","1/8","20"];
const formData = document.querySelector(".test-form");
const btnSubmit = document.querySelector(".btn-submit");
var score=0;

function calculateScore(){
    score = 0;
    let x =0;
    const formvalue = new FormData(formData);

    for(let i of formvalue.values()){
        
        if(i===correctAnswers[x]){
            score = score + 1;
        }
        x=x+1;
    }

    localStorage.setItem('score',score);
    
}
btnSubmit.addEventListener('click',calculateScore);
