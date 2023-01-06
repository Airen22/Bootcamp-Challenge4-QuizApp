
var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var startPage = document.querySelector(".start-page");
var questionContainer = document.querySelector(".question-container");
var trivia = document.querySelector("#question");
var btns = document.querySelector("#btns");
// var answerA = document.querySelector("#answer-a");
// var answerB = document.querySelector("#answer-b");
// var answerC = document.querySelector("#answer-c");
var hide = document.querySelector(".hide");
var score = 0
var timer;
var timerCount;
var currentQuestion = 0;


function startGame() {
  timerCount = 60;
  startTimer()
  renderQuestions()
}
function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = "Timer: " + timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

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
      correct: "Mariana's Point",
    },
]

function renderQuestions() {
  var questionIndex = quizQuestions[currentQuestion];
  console.log(questionIndex);
  startPage.style.display = 'none';
  hide.style.display = 'block';

  trivia.textContent = questionIndex.question;
  console.log(questionIndex.question);
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
        timerElement.textContent = "Timer: " + timerCount;
        // message "incorrect"
      } else {
        // message "correct"
      } 
currentQuestion++;
      if (currentQuestion === quizQuestions.length) {
        endQuiz()
      } else {
        renderQuestions()
      }
      
      // renderQuestions();
    }
    


    // console.log(quizQuestions[i].answers.a);
    // console.log(quizQuestions[i].answers.b);
    // console.log(quizQuestions[i].answers.c);
  

  // function checkA() {
  //   if (quizQuestions[0].correct === 'a') {
  //     document.getElementById(".message")="correct";
  //   } else {
  //     timerCount-10
  //   }
  // }

    // div.innerHTML += 'button'
    // var obj = quizQuestions[i];
    // create("p", {textContent: obj.question}, questionContainer);
    // create("button", {textContent: obj.answers[0]})
  


//   for (var i = quizQuestions) {
    
//   }
//   var output = [];
//   quizQuestions.forEach(
//     (currentQuestion, questionNumber) = function() {
//       var answers = [];
//       for (letter in currentQuestion.answers){
//         answers.push(
//           ''
//         )
//       }
//     }
//   )
// for (var i = 0; i < quizQuestions; i++) {
//   quizQuestions.textContent = question + answers
// }




startButton.addEventListener("click", startGame);