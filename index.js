const readlineSync = require("readline-sync");
let score = 0;

let questions = [
  {
    question: "What is my age? ",
    answer: "21",
  },
  {
    question: "What is my favorite hobby? ",
    answer: "Painting",
  },
  {
    question: "What is the name of my college? ",
    answer: "ABES",
  },
  {
    question: "What is my favorite color? ",
    answer: "Blue",
  },
  {
    question: "What is my favorite food? ",
    answer: "Pizza",
  },
];

function greet() {
  let userName = readlineSync.question("What is your name? ");
  console.log("Welcome " + userName + " to the quiz!");
}

function play(question, answer) {
  let userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("Correct Answer!");
    score = score + 1;
  } else {
    console.log("Wrong Answer!");
  }

  console.log("Your current score: " + score);
  console.log("-------------");
}
function startGame(){
    for(let i = 0;i<questions.length;i++){
        play(questions[i].question,questions[i].answer);
    }
    finalScore();
}

function finalScore(){
    console.log("Final Score: " + score);
}
greet();
startGame();