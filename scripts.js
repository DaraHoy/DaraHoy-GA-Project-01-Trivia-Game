//Variables
let $question = $('#question');
let $ansA = $('#answerA');
let $ansB = $('#answerB');
let $ansC = $('#answerC');
let $ansD = $('#answerD');
let $ansR = $('#answerR');

//The Question and Answer Object
let answer;

//Functions
//Populate trivia: Questions & Answers A, B, C, D
let getQuestion = function() {
  let maxOptions = 6;
  let minOptions = 0;
  let randomQuestionBankIndex = Math.floor(Math.random() * (maxOptions - minOptions + 1)) + 0;
  let i = randomQuestionBankIndex;
    console.log(i);
    console.log(questionBank[i]);
    questionSet = questionBank[i];
    //passes answer & question from questionSet[0] to answer variable
    answer = questionSet[1][0];
    console.log(questionSet[1][0]);
    //Randomize the placement of choices A,B,C,D
    randomizeChoice();
};


//Randomize answer positions
let randomizeChoice = function() {
    let x = questionSet[1].sort(function() {
        return 0.5 - Math.random();
    });
    console.log(x);


    //Push choices up into DOM Elements
    let appendChoices = function() {
        $ansA.append(x[0]);
        $ansB.append(x[1]);
        $ansC.append(x[2]);
        $ansD.append(x[3]);
        $question.append(questionSet[0]);
    };
    //Push choices up into DOM Elements
    appendChoices();
};


//Compare selected choice to the answer in the Answer Object
let correctAnswer = function() {
    if (this.choice == answer) {
        console.log('WIN');
        resetAnswer();
    } else {
        console.log('LOSE');
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


// Elements clicks
$ansA.on('click', function() {
    console.log('testing answer');
    let choice = $ansA.text();
    correctAnswer();
});


$ansB.on('click', function() {
    console.log('test');
    let choice = $ansB.text();
    correctAnswer();
});


$ansC.on('click', function() {
    console.log('test');
    let choice = $ansC.text();
    correctAnswer();
});


$ansD.on('click', function() {
    console.log('test');
    let choice = $ansD.text();
    correctAnswer();
});

$('#start').on('click', getQuestion);
$('#restart').on('click', resetAnswer);




//Questions array
const questionBank = [
    ['Who is the "Chosen One"?', ['Agent Smith', 'Neo', 'Harry Potter', 'The Rock']],
    ["Who is Harry Potter's Defense Against The Dark Arts professor?", ['Severus Snape', 'Agent Smith', 'Neo', 'Harry Potter, himself']],
    ['What is the name of the story Bilbo wrote about his adventures?', ['The Hobbit by Bilbo Baggins', 'The Silmarillion by Bilbo Baggins', 'A Hobbits Tale by Bilbo Baggins', 'Into the West by Bilbo Baggins']],
    ['By what name do the Elves call Gandalf?', ['Mithrandir', 'Gandalf the Grey', 'Incanus', 'The Grey Pilgrim']],
    ['What three swords were found in the Trolls Cave in The Hobbit?', ['Orcrist, Sting and Glamdring', 'Narsil, Glamdring and Hadhafang', 'Sting, Anduil and The White Knife of Legolas', 'Aeglos, Orcrist and Sting']],
    ['Who is referred to as the Son of Glion?', ['Gimli', 'Durin', 'Balin', 'Legolas']],
    ['What is "...as hard as dragon scale and as light as a feather"?', ['Mithril', 'Adamantium', 'Titanuim', 'The Rock']]
];
