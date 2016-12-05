//Variables
let $question = $('#question');
let $ansA = $('#choice-a');
let $ansB = $('#choice-b');
let $ansC = $('#choice-c');
let $ansD = $('#choice-d');
let $timer = $('#time-left');
let score = 0;
let answer;
let questionSet;
let isCorrect = false;
let hiScore = localStorage.getItem("highScore");
let hiScoreValue = 0;

//Populate trivia: Questions & Answers A, B, C, D
let getQuestion = function() {
    resetAnswer();
    let maxOptions = 20;
    let minOptions = 0;
    let randomQuestionBankIndex = Math.floor((Math.random() * maxOptions) + 1);
    let i = randomQuestionBankIndex;
    console.log(i);
    questionSet = questionBank[i];
    answer = questionSet.answer;
    //Randomize the placement of choices A,B,C,D
    randomizeChoice();
};


//Randomize answer positions
let randomizeChoice = function() {
    let shuffled = questionSet.answer_choices.sort(function() {
        return 0.5 - Math.random();
    });
    appendChoices(shuffled);
};


//Push choices up into DOM Elements
let appendChoices = function(shuffled) {
    $ansA.append(shuffled[0]);
    $ansB.append(shuffled[1]);
    $ansC.append(shuffled[2]);
    $ansD.append(shuffled[3]);
    $question.append(questionSet.question);
};


//Compare selected choice to the answer in the Answer Object
let correctAnswer = function(choice) {
    if (choice === answer) {
        console.log('WIN');
        getQuestion();
        isCorrect = true;
        alert("NICE! +5 SECONDS");
        score = score + (100 + (timeRemaining * 2));
    } else {
        console.log('LOSE');
        alert("WRONG! Correct answer was " + answer + ".");
        resetAnswer();
        getQuestion();
    }
};


//Resets Question set
let resetAnswer = function() {
    $question.html('');
    $ansA.html('');
    $ansB.html('');
    $ansC.html('');
    $ansD.html('');
    console.log('Removed Question Set');
};




let timeRemaining = 100;

//countdown and clocks
let countDown = function() {
    let startClock = setInterval(function() {
        if (isCorrect) {
            timeRemaining += 50;
            isCorrect = false;
        }
        //Lose condition
        if (timeRemaining <= 1) {
            clearInterval(startClock);
            $timer.html('Score: ' + score);
$question.html('High Score: '+ hiScore);
            updateHiScore(score);

            $('.answer-container').hide();
        } else {
        timeRemaining--;
        displayTimeRemaining();
        // $timer.html(timeRemaining);
        console.log(timeRemaining);
      }
    }, 100);
    $timer.show();
};

//Displays time remaining
let displayTimeRemaining = function(){
  let count = timeRemaining / 1;
//
  $timer.html(count.toPrecision(count.toString().length));
};

//HiScore function
let updateHiScore = function(){
  if (score >= hiScore){

    highScoreValue = score;
    localStorage.setItem("highScore", highScoreValue);
    $question.html('NEW High Score! '+ score);
  }
};




//Starts game and shows answer fields
let newGame = function(){
  $('.answer-container').show();
  timeRemaining = 100;
  score = 0;
  resetAnswer();
  getQuestion();
  countDown();
};

//Replay game
let replayGame = function(){
  $('#replay').hide();
  timeRemaining = 100;
  score = 0;
  getQuestion();
  countDown();
};



// Event handlers
$ansA.on('click', function() {
    console.log('testing answer');
    let choice = $ansA.text();
    correctAnswer(choice);
});
$ansB.on('click', function() {
    console.log('test');
    let choice = $ansB.text();
    correctAnswer(choice);
});
$ansC.on('click', function() {
    console.log('test');
    let choice = $ansC.text();
    correctAnswer(choice);
});
$ansD.on('click', function() {
    console.log('test');
    let choice = $ansD.text();
    correctAnswer(choice);
});

clearInterval(countDown);
$timer.hide();
$('#replay').hide();
$('.question-text').on('click', newGame);
$('#replay').on('click', replayGame);
$('.answer-container').hide();
$('.play').on('click', newGame);
$('#restart').on('click', resetAnswer);
