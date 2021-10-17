var timeElement = document.querySelector("#time");
var containerElement = document.querySelector(".container");
var btnElement = document.querySelector("#play");
var quesContain = document.querySelector(".questionContain");
var titleElement = document.querySelector("#title");
var olElement = document.querySelector("#questions");
var finishPage = document.querySelector(".finish-page");
var finalScore = document.querySelector("#score");
var errorMsg = document.querySelector("#errorMsg");
var inputInitials = document.querySelector("#inputInitials");
var submitElem = document.querySelector("#submitBtn");
var responseDiv = document.querySelector("#response");
var lastPgEle = document.querySelector(".last-page");
var scoreAndInt = document.querySelector("#staticEmail");
var homePage = document.querySelector("#home-page");

// questions
var questions = [
  {
    title: "Where is the JavaScript placed inside an HTML document or page?",
    choices: [
      "In the <footer> section",
      "In the <title> section",
      "In the <meta> section",
      "In the <body> and <head> sections",
    ],
    answer: "In the <footer> section",
  },
  {
    title:
      "In JavaScript, what is a block of code called that is used to perform a specific task?",
    choices: ["Declaration", "Function", "Variable", "String"],
    answer: "Function",
  },
  {
    title:
      "What is the name of the statement that is used to exit or end a loop?",
    choices: [
      "Break statement",
      "Falter statement",
      "Conditional statement",
      "Close statement",
    ],
    answer: "Conditional statement",
  },
  {
    title:
      "What is the element used – and hidden – in code that explains things and makes the content more readable?",
    choices: ["Comparisons", "Comparisons", "Notes", "Comments"],

    answer: "Notes",
  },
  {
    title:
      "In JavaScript, what element is used to store multiple values in a single variable?",
    choices: ["Variables", "Functions", "Strings", "Arrays"],
    answer: "Arrays",
  },
];

// function to add question to HTML
function displayQuestions() {
  var holdQ1Title = questions[i].title;
  titleElement.textContent = holdQ1Title;
  var holdq1Choice1 = questions[i].choices[0];
  var holdq1Choice2 = questions[i].choices[1];
  var holdq1Choice3 = questions[i].choices[2];
  var holdq1Choice4 = questions[i].choices[3];

  olElement.innerHTML = "";

  var liTag1 = document.createElement("li");
  liTag1.setAttribute("class", "all_li");
  var btn = document.createElement("button");
  btn.setAttribute("class", "btn");
  btn.textContent = holdq1Choice1;
  liTag1.appendChild(btn);
  olElement.appendChild(liTag1);
  quesContain.appendChild(olElement);

  var liTag2 = document.createElement("li");
  liTag2.setAttribute("class", "all_li");
  var btn2 = document.createElement("button");
  btn2.setAttribute("class", "btn");
  btn2.textContent = holdq1Choice2;
  liTag2.appendChild(btn2);
  olElement.appendChild(liTag2);
  quesContain.appendChild(olElement);

  var liTag3 = document.createElement("li");
  liTag3.setAttribute("class", "all_li");
  var btn3 = document.createElement("button");
  btn3.setAttribute("class", "btn");
  btn3.textContent = holdq1Choice3;
  liTag3.appendChild(btn3);
  olElement.appendChild(liTag3);
  quesContain.appendChild(olElement);

  var liTag4 = document.createElement("li");
  liTag4.setAttribute("class", "all_li");
  var btn4 = document.createElement("button");
  btn4.setAttribute("class", "btn");
  btn4.textContent = holdq1Choice4;
  liTag4.appendChild(btn4);
  olElement.appendChild(liTag4);
  quesContain.appendChild(olElement);
  var allBtnEl = document.querySelectorAll(".btn");
  allBtnEl.forEach(function (event) {
    event.addEventListener("click", onclickHandler);
  });
}
