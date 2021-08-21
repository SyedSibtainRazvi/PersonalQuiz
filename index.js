var readlineSync = require('readline-sync');
var score = 0;

// Welcome //

var userName = readlineSync.question("What is your name? ");

console.log("Welcome to the Game " + userName + " Let's Gooo!");

// Game Function//

function play(question, answer){
  var userAnswer = readlineSync.question(question);
if (userAnswer.toUpperCase() === answer.toUpperCase()){
  console.log("Right!");
   score = score + 1;
  console.log("Score is: " + score);
} else{
  console.log("Wrong!");
}
  console.log("____________");
}

// Array of questions //

var questions = [{
  question : "Do you know Sibtain? ",
  answer : "Yes"
},{
  question : "What is my Birthday month? ",
  answer : "August"
},{
  question : "In which year was I born? ",
  answer : "1997"
},{
  question : "What is my lucky number? ",
  answer : "7"
},{
  question : "What is my favourite colour? ",
  answer : "Blue"
},{
  question : "What is the name of my cat? ",
  answer : "Meiko"
},{
  question : "Do I wear spectacles? ",
  answer : "Yes"
},{
  question : "How many siblings I have? ",
  answer : "2"
},{
  question : "Musical instrument that I can play? ",
  answer : "Guitar"
},{
  question : "My favourite person? ",
  answer : "Cosmos"
}];

// Loop //

for (var i=0; i<questions.length; i++){
  var activeQuestion = questions[i];
  play (activeQuestion.question, activeQuestion.answer)
}

// High scores //

var highScores =[{
   Name : "Sibtain",
   Score : "10"
  }];

console.log("Thank you for playing! Your score is: " + score);
if (score>=10){
   console.log("Hurray!!!, you have the new high score, send me the screenshot and I will update the score")
} else {
  console.log("Try to get 10 for high score! ")
}
console.log("HIGHEST-SCORES");
console.log(highScores[0]);
