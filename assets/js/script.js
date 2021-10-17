var timer = 80;
var timeCounter;
// function to start timer
function timerSetup() {
  timeCounter = setInterval(function () {
    timer--;
    var timerReset = (timeElement.textContent = "Time:" + " " + timer);
    timer = timer;
    if (timer <= 0) {
      clearInterval(timeCounter);

      timeElement.textContent = timerReset;
    }
  }, 1000);
}

document.addEventListener("click", function (event) {
  if (event.target === btnElement) {
    containerElement.style.display = "none";
    timerSetup();
    displayQuestions();
  }
});
