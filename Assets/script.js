/*
create HTML elements for title that i can change to "the questions", "highscores"

then start a countdown timer function upon click of "start quiz" that removes 5 seconds for each wrong answer
 
style buttons to react if hovered over
when wrong answer selected, subtract time and place some text below saying "wrong!" and move to next question
when right answer selected say "Correct!" and move to next question
when time runs out OR finished answering questions say "All done!" and give final score value
under final score value have an input field for initials and a button to submit score/initials to highscore table
have highscore display initials and score. Place a button to go back and one to clear highscores
going back goes to start quiz?

TODOs


add styling to choices

try to work on highscores (local storage) and counter
work on what to do if question is right vs wrong


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
var result = document.querySelector("#rightWrong")



startBtn.addEventListener("click", startQuiz);

function startQuiz (){
title.textContent = ""
startBtn.style.visibility = "hidden"
setTime ();
displayQuestion(0);

}




function setTime (){
    var timerInterval = setInterval( function (){
        secondsLeft --;
        timer.textContent = "time remaining:  " + secondsLeft;

        if(secondsLeft === 0) {
            timer.textContent = ""
            clearInterval(timerInterval);
            //say game over
            //go to highscores

    }



},1000);
}



function displayQuestion(questionIndex){
    questionsAsked.textContent = questionsArray[questionIndex].question
    console.log(questionIndex)
    
        for (i = 0; i < questionsArray[questionIndex].choices.length; i++) {
            var choice = document.createElement("input");
            var labelName = document.createElement("label");
            var br = document.createElement("br");
    
            choice.setAttribute("type", "radio")
            choice.setAttribute("id", `choice${i}`)
            choice.setAttribute("name", "choice")
            labelName.setAttribute("for",`choice${i}`)
            choice.setAttribute("value", questionsArray[questionIndex].choices[i])
            labelName.textContent = questionsArray[questionIndex].choices[i]
    
            questionList.appendChild(choice)
            questionList.appendChild(labelName)
            questionList.appendChild(br)
            
            choice.addEventListener("click",function (event){
            var element = event.target;
            // console.log(element.getAttribute("value"))
            if(questionsArray[questionIndex].answer === element.getAttribute("value")){
                result.setAttribute("Style", "color: green")
                result.textContent = "Correct!"
                

                } else {
                    result.setAttribute("style", "color: red")
                    result.textContent = "Wrong!"
                    displayQuestion
                }
                questionIndex += 1
             displayQuestion(questionIndex)
            
    })
            
        }
    }

var questionsArray = [
  {
    question: "Which of the following is considered an event?",
    choices: ["up", "refresh", "charge", "mouseover"],
    answer: "mouseover",
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



