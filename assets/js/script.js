var timer = 80;
var timeCounter;
// function to start timer
function timerSetup() {
  timeCounter = setInterval(function () {
    timer--;
    var timerReset = (timeElement.textContent = "Time:" + " " + timer);
    timer = timer;
    if (time <= 0) {
      clearInterval(timeCounter);

      timeElement.textContent = timerReset;
    }
  }, 1000);
}
