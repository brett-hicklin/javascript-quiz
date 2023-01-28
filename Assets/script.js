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
var questionsAsked = document.querySelector("h3");
var startBtn = document.querySelector("#startBtn");
var timer = document.querySelector("#timer");
var rightOrWrong = document.querySelector("#rightWrong");
var questionList = document.querySelector("#possibleAnswers")






// questionList.appendChild(firstQ)




startBtn.addEventListener("click", startQuiz);

function startQuiz (){
title.textContent = ""
startBtn.style.visibility = "hidden"
setTime ();
displayQuestion();
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


function displayQuestion(){
    questionsAsked.textContent = questionsArray[0].question
    
    
        for (i = 0; i < questionsArray[0].choices.length; i++) {
            var choice = document.createElement("input")
            var labelName = document.createElement("label")
    
            choice.setAttribute("type", "radio")
            choice.setAttribute("id", `choice${i}`)
            choice.setAttribute("name", "choice")
            labelName.setAttribute("for",`choice${i}`)
    
            labelName.textContent = questionsArray[0].choices[i]
    
            questionList.appendChild(choice)
            questionList.appendChild(labelName)
            
        }
    }

var questionsArray = [
  {
    question: "Which of the following is considered an event?",
    choices: ["up", "refresh", "charge", "mouseover"],
    answer: "click",
  },
  {
    question: "Which of the following is used to make an array?",
    choices: ["''", "{}", "()", "[]"],
    answer: "[]",
  },
  {
    question: "How would you log something to the console?",
    choices: ["consoleLog()", "console()", "console.log()", "console.write()"],
    answer: "console.log()",
  },
  {
    question: "What index is the first item in an array?",
    choices: ["[0]", "[1]", "[2]", "[3]"],
    answer: "[0]",
  },
  {
    question: "what does shift() do to an array?",
    choices: ["Adds item to the front of an array", "Removes the first item of an array", "Adds item to end of an array", "Removes item from the end of an array"],
    answer: "Removes the first item of an array",
  },
  {
    question: "What separates a property and a value in an object?",
    choices: [";", "?", "=", ":"],
    answer: ":",
  },
  {
    question: "How do you call a function?",
    choices: ["function()", "function;", "function{}", "function[]"],
    answer: "function()",
  },
  {
    question: "How do you declare a variable?",
    choices: ["var x is 5", "var x.5", "var x = 5", "var = 5"],
    answer: "var x = 5",
  },
  {
    question: "which statement means strict equality?",
    choices: ["=", "==", "===", "!=="],
    answer: "===",
  },
  {
    question: "What HTML tag does JavaScript go into?",
    choices: ["<div>", "<script>", "<h2>", "<title>"],
    answer: "<script>",
  },
];



