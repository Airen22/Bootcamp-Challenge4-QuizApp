
var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var startPage = document.querySelector(".start-page");
var questionContainer = document.querySelector(".question-container");
var trivia = document.querySelector("#question");
var answerA = document.querySelector("#answer-a");
var answerB = document.querySelector("#answer-b");
var answerC = document.querySelector("#answer-c");
var hide = document.querySelector(".hide");
var score = 0
var timer;
var timerCount;


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
        answers: {
          a: "20m",
          b: "50m",
          c: "100m",
        },
        correct: 'c'
    },
    {
      question: "What sport involves the Stanley Cup?",
      answers: {
        a: "Golf",
        b: "Hockey",
        c: "NASCAR",
      },
      correct: 'b'
    },
    {
      question: "Which location refers to the deepest point in the ocean?",
      answers: {
        a: "Mariana's Point",
        b: "Oceanic Limit",
        c: "Challenger Deep",
      },
      correct: 'c'
    },
]

function renderQuestions() {
  startPage.style.display = 'none';
  hide.style.display = 'block';
  for (var i = 0; i < quizQuestions.length; i++) {
    trivia.textContent = quizQuestions[i].question;
    answerA.textContent = quizQuestions[i].answers.a;
    answerB.textContent = quizQuestions[i].answers.b;
    answerC.textContent = quizQuestions[i].answers.c;
    
    answerA.addEventListener("click", checkA)
    // if (quizQuestions[i].correct === 'a') {
    //     return;
    //   } else {
    //     timerCount-10
    //   }
    
 
    }
    // console.log(quizQuestions[i].answers.a);
    // console.log(quizQuestions[i].answers.b);
    // console.log(quizQuestions[i].answers.c);
  }

  function checkA() {
    if (quizQuestions[i].correct === 'a') {
      return;
    } else {
      timerCount-10
    }
  }

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