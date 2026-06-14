const quizButtons =
document.querySelectorAll(".quiz-option");

const quizResult =
document.getElementById("quizResult");

quizButtons.forEach(button=>{

button.addEventListener("click",()=>{

const answer =
button.textContent.trim();

if(answer==="paypal.com"){

quizResult.innerHTML=`
✅ Correct!
This is the legitimate domain.
`;

quizResult.style.color="#00ff99";

}
else{

quizResult.innerHTML=`
❌ Wrong!
This is a phishing-style domain.
`;

quizResult.style.color="#ff3366";

}

});

});