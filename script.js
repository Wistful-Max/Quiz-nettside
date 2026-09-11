const question = ["q0", "q1","q2","q3","q4","q5","q6","q7","q8","q9","q10"];

const question_set = [
    {
    text: "Hvor mange prosent er 3 stjerner i COC?",
    correct: 2,
    answersCOC: ["50","1","100","85-100"],
    }
]

let points = 0

//Placing the question and answers under the button oppon clicking it.
const please = document.getElementById("button")
please.addEventListener('click',function(){
    document.getElementById("insert-q").textContent = question_set[0].text
    document.getElementById("insert-a").textContent = question_set[0].answersCOC
})
//Trying to make clicking the correct answer give 1 point
const answers = document.getElementById("insert-a")
answers.addEventListener('click',function(){
    if(answers == question_set[0].correct){
        points = points + 1
    }
})

Math.floor(Math.random() * 11);

