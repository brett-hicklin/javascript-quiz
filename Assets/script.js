/*
create HTML elements for title that i can change to "the questions", "highscores"

start with getting score and time on top of screen
then start a countdown timer function upon click of "start quiz" that removes 5 seconds for each wrong answer
then hide "title" of coding quiz 
then make h3 bolded asking "question" as property from object with an array
then supply possible answers as values from the question property from an array inside of an object
style buttons to react if hovered over
when wrong answer selected, subtract time and place some text below saying "wrong!" and move to next question
when right answer selected say "Correct!" and move to next question
when time runs out OR finished answering questions say "All done!" and give final score value
under final score value have an input field for initials and a button to submit score/initials to highscore table
have highscore display initials and score. Place a button to go back and one to clear highscores
going back goes to start quiz?



*/ 
var secondsLeft = 75;
var highScores = document.querySelector("#highscores");
var centerBtn = document.querySelector("#centerBtn");
var title = document.querySelector("h1");
var questionsStyling = document.querySelector("h3");
var startBtn = document.querySelector("#startBtn");
var timer = document.querySelector("#timer")

//styling for title of quiz
title.textContent = "test";
title.style.textAlign = "center";

//styling for questions
questionsStyling.innerText = "testing";
questionsStyling.style.textAlign = "center";

//centers the button in the screen
centerBtn.style.textAlign ="center"

startBtn.addEventListener("click", startQuiz);

function startQuiz (){
title.textContent = ""
startBtn.style.visibility = "hidden"
setTime ();
}


function setTime (){
    var timerInterval = setInterval( function (){
        secondsLeft --;
        timer.textContent = "time remaining:  " + secondsLeft;

        if(secondsLeft === 0) {
            timer.textContent = ""
            clearInterval(timerInterval);
    }



},1000);
}


questions[{
    question: "What is an event?",
    choices: ["A","B","C","D"],
    answer:"A"
},{

}
]



