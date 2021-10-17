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
}
