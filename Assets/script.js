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
var count = 75;

var title = document.querySelector("h1");
// title.innerText = "test";

var questions = document.querySelector("#questions");
// questions.innerText = "testing";

var startBtn = document.querySelector("#startBtn");
startBtn.addEventListener("click", startQuiz);

function startQuiz (){

}

var countDown = document.querySelector("countDown")
setInterval (function (){
for(let i = 0; i>0; i--){
    count[i]
}
})
,1000;




