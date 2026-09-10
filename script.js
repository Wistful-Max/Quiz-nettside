const question = ["question0", "question1","question2"];

const please = document.getElementById("test")
please.addEventListener('click',function(){
    document.getElementById("test").textContent = question[Math.floor(Math.random() * 2)]
})

quesstionMath.floor(Math.random() * 11);