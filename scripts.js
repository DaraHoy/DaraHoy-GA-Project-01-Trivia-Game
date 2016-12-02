//Variables
let $question = $('#question');
let $ansA = $('#answerA');
let $ansB = $('#answerB');
let $ansC = $('#answerC');
let $ansD = $('#answerD');
let $ansR = $('#answerR');
let $timer = $('#timer');
let timeRemaining = 11;
let answer;


//Functions
//Populate trivia: Questions & Answers A, B, C, D
let getQuestion = function() {
    let maxOptions = 4;
    let minOptions = 0;
    let randomQuestionBankIndex = Math.floor(Math.random() * (maxOptions - minOptions + 1)) + 0;
    let i = randomQuestionBankIndex;
    console.log(i);
    console.log(questionBank[i]);
    questionSet = questionBank[i];
    //passes answer & question from questionSet[0] to answer variable
    answer = questionSet.answer;
    console.log(questionSet.answer);
    //Randomize the placement of choices A,B,C,D
    randomizeChoice();
};


//Randomize answer positions
let randomizeChoice = function() {
    let shuffled = questionSet.answer_choices.sort(function() {
        return 0.5 - Math.random();
    });
    console.log(shuffled);
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
        alert("Nice! Keep going!");
        resetAnswer();
        getQuestion();
        addSeconds = timeRemaining + 5;
        $timer.html(addSeconds);
    } else {
        console.log('LOSE');
        alert("Try again whelp");
        resetAnswer();
        getQuestion();
    }
};

let removeWelcome = function(){
  $(".play").hide();
  getQuestion();
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


//countdown
let countDown = setInterval(function() {
    if (timeRemaining <=1){
      clearInterval(countDown);
    }
    timeRemaining--;
    $timer.html(timeRemaining);
    console.log(timeRemaining);
}, 1000);


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

$('.play').on('click', removeWelcome);
$('#restart').on('click', resetAnswer);
