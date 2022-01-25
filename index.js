var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Ajay",
    score: 10,
  },

  {
    name: "Nitish",
    score: 5,
  },
]

// array of objects
var questions = [{
  question: "What do Ajay do? ",
  answer: "job"
}, {
  question: "Where do he work? ",
  answer: "axslogic"
}, {
  question: "Is he married / single? ",
  answer: "married"
}, {
  question: "What is his partner's name? ",
  answer: "minakshi"
}, {
  question: "Do he have any children? ",
  answer: "no"
}, {
  question: "What is his birth-year? ",
  answer: "1991"
}, {
  question: "Where Ajay from? ",
  answer: "shimla"
}, {
  question: "What is his phone number? ",
  answer: "9555254848"
}, {
  question: "What is his favorite color? ",
  answer: "red"
}, {
  question: "Is he romantic? ",
  answer: "yes"
}];

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " to DO YOU KNOW AJAY?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");

  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: "+ score +" out of 10");

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();