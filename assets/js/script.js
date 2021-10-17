var timer = 30;
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

/**declare the index variable for the onclickHandler function**/
var i = 0;

/**Add a function to compare the answers and
 * display each questions as the buttons are clicked.*/
function onclickHandler(event) {
  if (timer <= 0) {
    clearInterval(timeCounter);
    quesContain.style.display = "none";
    displayResult();
  }
  var answerText = event.target.textContent;
  if (answerText === questions[i].answer) {
    timer = timer;
  } else {
    timer = timer - 10;
  }
  if (i < questions.length - 1) {
    i++;

    setTimeout(function () {
      displayQuestions();
      responseDiv.textContent = "";
    }, 1000);
  } else {
    setTimeout(function () {
      responseDiv.textContent = "";
      displayResult();
      clearInterval(timeCounter);
    }, 500);

    quesContain.innerHTML = "";
  }

  /**Function to display users final score */
  function displayResult() {
    finishPage.style.visibility = "visible";
    timeElement.textContent = "Time:" + " " + timer;
    var HighScores = timer;
    localStorage.getItem(HighScores);
    finalScore.textContent = "Your finally score is: " + HighScores;
    localStorage.setItem("HighScores", HighScores);
  }
}
/**function to show the last page  */
function renderLastItem() {
  var yourScore = localStorage.getItem("HighScores");
  var yourInitial = localStorage.getItem("Initial");
  if (yourScore && yourInitial === "") {
    return;
  }
  finishPage.textContent = "";
  var lastPgEle = document.querySelector(".last-page");
  lastPgEle.style.visibility = "visible";
  var scoreAndInt = document.querySelector("#staticEmail");
  scoreAndInt.value = yourInitial + ":" + " " + yourScore;
}

//** This event listener submit the initial and final score to the local storage */—
document.addEventListener("submit", function (event) {
  event.preventDefault();
  var inputInitials = document.querySelector("#inputInitials").value;
  if (inputInitials === "") {
    errorMsg.setAttribute("style", "color: red");
    errorMsg.textContent = "Initial input field cannot be empty";
  } else {
    errorMsg.textContent = "";
    localStorage.getItem(inputInitials);
    localStorage.setItem("Initial", inputInitials);
    renderLastItem();
  }
});
/**This function will refresh the page and send user back to beginning page when go back button is clicked */
function init() {
  location.reload();
}
/**This function will  clear initial and score displayed on the final page */
function clearScore() {
  scoreAndInt.value = "";
}
