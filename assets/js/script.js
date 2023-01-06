
var startBtn = document.querySelector(".start-button");
var timerEl = document.querySelector(".timer-count");
var startContainer = document.querySelector(".start-container");
var questionContainer = document.querySelector(".question-container");
var question = document.querySelector("#question");
var btns = document.querySelector("#btns");
var scoreContainer = document.querySelector(".score-container");
var finalScore = document.querySelector("#final-score")
var inputEl = document.querySelector("#name-input")
var submitBtn = document.querySelector("#submit-btn")
var timer;
var timerCount = 60
var currentQuestion = 0;

startBtn.addEventListener("click", startGame);

function startGame() {
  startTimer()
  renderQuestions()
}
function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerEl.textContent = "Timer: " + timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

// localStorage.setItem("arr", JSON.stringify(quizQuestions))


function renderQuestions() {
  var questionIndex = quizQuestions[currentQuestion];
  startContainer.style.display = 'none';
  questionContainer.style.display = 'block';

  question.textContent = questionIndex.question;
  btns.innerHTML = "";
  questionIndex.answers.forEach(answer => {
    var button = document.createElement("button");
    button.setAttribute("class", "btn")
    button.setAttribute("value", answer)
    button.textContent = answer;
    button.onclick = checkAnswer;
    btns.appendChild(button);
      })

    }

    var checkAnswer = function() {
      if (this.value !== quizQuestions[currentQuestion].correct) {
        timerCount -=10;
        timerEl.textContent = "Timer: " + timerCount;
      } else {
      } 
currentQuestion++;
      if (currentQuestion === quizQuestions.length) {
        endQuiz()
      } else {
        renderQuestions()
      }

    }
      function endQuiz() {
      scoreContainer.style.display = 'block';
      finalScore.textContent = timerCount;
      questionContainer.style.display = 'none';
      clearInterval(timer);
      
    }
      var scores = []    
    submitBtn.addEventListener("click", function() {
      scores.push(timerCount + " - " + inputEl.value)
      localStorage.setItem("Scores", scores)
    });

    var quizQuestions = [
      {
          question: "How long is the olympic swimming pool?",
          answers: ["20m","50m","100m"],
          correct: "50m"
      },
      {
        question: "What sport involves the Stanley Cup?",
        answers: ["Golf","Hockey", "NASCAR"],
        correct: "Hockey"
      },
      {
        question: "Which location refers to the deepest point in the ocean?",
        answers: ["Mariana's Point", "Oceanic Limit", "Challenger Deep"],
        correct: "Challenger Deep",
      },
  ]
    