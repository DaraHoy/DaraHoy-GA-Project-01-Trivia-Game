
//hides game Answers


//Variables
let $question = $('#question');
let $ansA = $('#answerA');
let $ansB = $('#answerB');
let $ansC = $('#answerC');
let $ansD = $('#answerD');
let $ansR = $('#answerR');
let $timer = $('#timer');
let score = 0;
let answer;
let questionSet;
let isCorrect = false;


//Functions
//Populate trivia: Questions & Answers A, B, C, D
let getQuestion = function() {
    resetAnswer();
    let maxOptions = 4;
    let minOptions = 0;
    let randomQuestionBankIndex = Math.floor(Math.random() * (maxOptions - minOptions + 1)) + 0;
    let i = randomQuestionBankIndex;
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
        score = score + 100;
    } else {
        console.log('LOSE');
        alert("WRONG");
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




let timeRemaining = 10;

//countdown and clocks
let countDown = function() {
    let startClock = setInterval(function() {
        if (isCorrect) {
            timeRemaining += 5;
            isCorrect = false;
        }
        //Lose condition
        if (timeRemaining <= 1) {
            clearInterval(startClock);
            $timer.html('Score: ' + score);
            $('#replay').show();
        } else {
        timeRemaining--;
        // displayTimeRemaining();
        $timer.html(timeRemaining);
        console.log(timeRemaining);
      }
    }, 1000);
    $timer.show();
};

// //Displays time remaining
// let displayTimeRemaining = function(){
//   let count = timeRemaining / 100;
// //
//   $timer.html(count.toPrecision(count.toString().length));
// };






//Starts game and shows answer fields
let removeWelcome = function(){
  $(".play").hide();
  $('.answer').show();
  getQuestion();
  countDown();
};

//Replay game
let replayGame = function(){
  $('#replay').hide();
  timeRemaining = 10;
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
$('#replay').on('click', replayGame);
$('.answer').hide();
$('.play').on('click', removeWelcome);
$('#restart').on('click', resetAnswer);
