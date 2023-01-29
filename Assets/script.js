// creating variables from DOM to use later in code
var secondsLeft = 75;
var currentScore = 0;
var highScores = document.querySelector("#highscores");
var title = document.querySelector("h1");
var questionsAsked = document.querySelector("h3");
var startBtn = document.querySelector("#startBtn");
var timer = document.querySelector("#timer");
var questionList = document.querySelector("#possibleAnswers");
var result = document.querySelector("#rightWrong");
var clearQuestions = document.querySelector("form");
var hideWindow = document.querySelector("#hideWindow");
var highscoreBox = document.querySelector("#highscoreBox");
var highscoreEntry = document.querySelector("#highscoreEntry");
var subtitle = document.querySelector("#subtitle")

// hides the high score information until it's needed
highScores.style.visibility = "hidden";
highscoreBox.style.visibility = "hidden"
// kicks off the start of the quiz by clicking "Start Quiz" button
startBtn.addEventListener("click", startQuiz);
var isHighscoreTable = false;
//removes text and the start button once the button has been clicked. Also sets the current score to
//0 for every time the quiz starts. This function also calls the set time function and display question
function startQuiz() {
  isHighscoreTable = false;
  title.textContent = "";
  startBtn.style.visibility = "hidden";
  subtitle.textContent = ""

  currentScore = 0;
  setTime();
  displayQuestion(0);
}
//this function starts the timer and displays the count down while the quiz is being taken.
//it also has the user go to the high score table when the time has run out.
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "time remaining:  " + secondsLeft;

    if (secondsLeft <= 0 || isHighscoreTable === true) {
      timer.textContent = "";
      clearInterval(timerInterval);
      if (!isHighscoreTable) {
        highscoreTable();
      }
    }
  }, 1000);
}
//this function displays all the questions and possible answers throughout the quiz
function displayQuestion(questionIndex) {
  if (questionIndex < questionsArray.length) {
    questionsAsked.textContent = questionsArray[questionIndex].question;
    clearQuestions.textContent = "";

    for (let i = 0; i < questionsArray[questionIndex].choices.length; i++) {
      //below creates the elements required to display the answer choices
      var formPara = document.createElement("p");
      var choice = document.createElement("input");
      var labelName = document.createElement("label");
      //below sets the attributes to make the choices selectable 
      choice.setAttribute("type", "radio");
      choice.setAttribute("id", `choice${i}`);
      choice.setAttribute("name", "choice");
      labelName.setAttribute("for", `choice${i}`);
      choice.setAttribute("value", questionsArray[questionIndex].choices[i]);
      labelName.textContent = questionsArray[questionIndex].choices[i];
      //below displays the list of the choices to the HTML doc
      questionList.appendChild(formPara);
      formPara.appendChild(choice);
      formPara.appendChild(labelName);
      // below checks to see if the answer selected was correct or incorrect, and starts adding up the score and
      //subtracting time if incorrect answer was selected.
      choice.addEventListener("click", function (event) {
        var element = event.target;

        if (
          questionsArray[questionIndex].answer === element.getAttribute("value")
        ) {
          result.setAttribute("Style", "color: green");
          result.textContent = "Correct!";
          currentScore += 1;
        } else {
          result.setAttribute("style", "color: red");
          result.textContent = "Wrong!";
          secondsLeft -= 10;
        }
        //this progresses the questions through the quiz
        questionIndex += 1;
        displayQuestion(questionIndex);
      });
    }
  } else {
    if (!isHighscoreTable) {
      highscoreTable();
    }
  }
}
//this function creates the elements for the high scores section and shows the scores
function highscoreTable() {
  //sets the high score to true so the timer running out wont add another "enter initials" field
  isHighscoreTable = true;
  var textInput = document.createElement("input");
  var submitBtn = document.createElement("input");
  var enterInitials = document.createElement("label");
  var clearBtn = document.createElement("button");
  //hides and shows necessary content for the high scores, also displays final score
  hideWindow.style.visibility = "hidden";
  title.textContent = "High Scores";
  title.style.visibility = "visible";
  highScores.style.visibility = "visible";
  clearBtn.style.visibility = "hidden";
  subtitle.textContent = `Final Score: ${currentScore}`;
  subtitle.style.visibility = "visible";
  subtitle.style.textAlign = "center"
  // sets the attributes for the text field and submit button for entering your initials and adding score to high scores
  textInput.setAttribute("type", "text");
  textInput.setAttribute("name", "initials");
  textInput.setAttribute("id", "textField");
  submitBtn.setAttribute("type", "submit");
  enterInitials.setAttribute("for", "initials");
  enterInitials.textContent = "Enter initials: ";
  clearBtn.textContent = "Clear high scores";
  clearBtn.setAttribute("id", "clearBtn");
  
  // adds the created elements to the HTML doc
  highscoreEntry.appendChild(enterInitials);
  highscoreEntry.appendChild(textInput);
  highscoreEntry.appendChild(submitBtn);
  document.body.appendChild(clearBtn);
  // upon click of the submit button, it takes the users input and verifies that it has initials as the input and
  //is not empty or too long.
  submitBtn.addEventListener("click", function (event) {
    var element = document.querySelector("#textField");

    if (element.value === "" || element.value.length > 3) {
      event.preventDefault();
      alert("Please enter your initials");
    } else {
        //takes user input as well as the score and adds it to the display of high scores
      clearBtn.style.visibility = "visible";
      var scoreInitials = {
        score: currentScore,
        initials: element.value,
      };
      var scoreArray = JSON.parse(localStorage.getItem("scores"));

      if (scoreArray === null) {
        scoreArray = [];
      }

      scoreArray.push(scoreInitials);
      localStorage.setItem("scores", JSON.stringify(scoreArray));

      highscoreEntry.style.visibility = "hidden";

      scoreArray.sort(function (a, b) {
        return b.score - a.score;
      });
      // creates the list for all the high scores displayed
      for (let i = 0; i < scoreArray.length; i++) {
        var listItem = document.createElement("li");

        listItem.textContent = `${scoreArray[i].initials} - ${scoreArray[i].score} `;
        highScores.appendChild(listItem);
      }
      //gives the option to clear the high scores by clicking said button
      clearBtn.addEventListener("click", clearStorage);
    }
  });
}
// function clears local storage, clears the final score and visually clears the high score table
function clearStorage() {
  localStorage.clear();
  highScores.textContent = "";
  subtitle.textContent = "";
}
// the array of all the questions asked with their possible answers and the correct answer listed.
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
    choices: [
      "Adds item to the front of an array",
      "Removes the first item of an array",
      "Adds item to end of an array",
      "Removes item from the end of an array",
    ],
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



