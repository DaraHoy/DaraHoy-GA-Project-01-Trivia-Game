//Variables
let $quest = $('#question');
let $ansA = $('#answerA');
let $ansB = $('#answerB');
let $ansC = $('#answerC');
let $ansD = $('#answerD');
let $ansR = $('#answerR');

//The Question and Answer Object
let trivia = {
  answer:"test"};

//Functions
//Populate trivia: Questions & Answers A, B, C, D
let getQuestion = function (){
      i = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
      console.log(i);
      console.log(setA[i]);
      questions = setA[i];
      //passes answer & question from questions[] to Answer Object
      console.log(questions[0]);
      console.log(questions[1]);
      trivia.question = questions[0];
      trivia.answer = questions[1];
      //Randomize the placement of choices A,B,C,D
      //randomizeChoice();
      //Push choices up into DOM Elements
      appendChoices();
};

//Push choices up into DOM Elements
let appendChoices = function (){
      $ansA.append(questions[1]);
      $ansB.append(questions[2]);
      $ansC.append(questions[3]);
      $ansD.append(questions[4]);
      $quest.append(questions[0]);
};

//Randomize answer positions
// let randomizeChoice = function (){
//
//
//   questions.sort(function () {return 0.5 - Math.random()});
//   //push array items (questions) to span tags
// };


// Elements clicks
$ansA.on('click', function(){
  console.log('test');
});
$ansB.on('click', function(){
  console.log('test');
});
$ansC.on('click', function(){
  console.log('test');
});
$ansD.on('click', function(){
  console.log('test');
});

$('#start').on('click', getQuestion);

//Questions array
setA = [
  ["What was the name of Harry Potter's Defense Against The Dark Arts professor?", "Albus Dumbledore", "Samwise Gamgee", "Severus Snape", "Hans Gruber"],
  ["What was the name of Harry Potter's dark arts professor?", "Albus Dumbledore", "Samwise Gamgee", "Severus Snape", "Hans Gruber"],
  ["What was the name of Harry Potter's dark arts professor?", "Albus Dumbledore", "Samwise Gamgee", "Severus Snape", "Hans Gruber"],
];
