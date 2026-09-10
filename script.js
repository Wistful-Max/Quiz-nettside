const question = ["q0", "q1","q2","q3","q4","q5","q6","q7","q8","q9","q10"];

const question_set = [
    {
    text: "Hvor mange prosent er 3 stjerner i COC?",
    correct: 3,
    answersCOC: ["50","1","100","85-100"],
    }
]

const please = document.getElementById("test")
please.addEventListener('click',function(){
    document.getElementById("insert").textContent = question_set[0].text
})

Math.floor(Math.random() * 11);

