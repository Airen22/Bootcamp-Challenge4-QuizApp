var timeEl = document.querySelector(".time");
var secondsLeft = 11;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval();
      timeEl = "Time: 0"
    }

  }, 1000);
}


setTime();