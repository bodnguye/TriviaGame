// VARIABLES
//===========================================================

// Array of questions for the trivia.
var triviaQuestions = [{question: "What is Jackies' middle name?", 
                        answers: {a: "Pamela",b: "Bula",c: "Sharon",d: "Sarah"},
                        correctAnswer: "b",
                        correctAnswerWord: "Bula",
                        image: "<img src='./assets/images/jackie.gif'/>"},

                        {question: "Wilmer Valderrama plays Fez, but what country does he really come from?", 
                        answers: {a: "Venezuela",b: "Morocco",c: "Spain",d: "Chili"},
                        correctAnswer: "a",
                        correctAnswerWord: "Venezuela",
                        image: "<img src='./assets/images/fez-good-day.gif'/>"},

                        {question: "What's the name of the local burger restaurant owned by Jackies dad?", 
                        answers: {a: "Bonzo Burger",b: "Macho Burger",c: "Fatso Burger",d: "Fillies Burgers"},
                        correctAnswer: "c",
                        correctAnswerWord: "FatsoBurger",
                        image: "<img src='./assets/images/good-burger.gif'/>"},

                        {question: "When Donna gets a job at a radio station, what is her on air name?", 
                        answers: {a: "Crazy Donna",b: "Pasty Donna",c: "Groovy Donna",d: "Hot Donna"},
                        correctAnswer: "d",
                        correctAnswerWord: "Hot Donna",
                        image: "<img src='./assets/images/donna.gif'/>"},
                    
                        {question: "Donna won two tickets to see what concert?", 
                        answers: {a: "Kiss",b: "Led Zeppelin",c: "The Rolling Stones",d: "Jackson 5"},
                        correctAnswer: "b",
                        correctAnswerWord: "Led Zeppelin",
                        image: "<img src='./assets/images/led-zeppelin.gif'/>"},
                    
                        {question: "Fez got stalked by his ex-girlfriend. What was her name?", 
                        answers: {a: "Caroline",b: "Claire",c: "Clarissa",d: "Chloe"},
                        correctAnswer: "a",
                        correctAnswerWord: "Caroline",
                        image: "<img src='./assets/images/halloween.gif'/>"},
                    
                        {question: "Donna found a pair of panties in Eric's car. Who did they belong to?", 
                        answers: {a: "Midge",b: "Jackie",c: "Fez",d: "Laurie"},
                        correctAnswer: "a",
                        correctAnswerWord: "Midge",
                        image: "<img src='./assets/images/glorious-panties.gif'/>"},
                    
                        {question: "The guys traveled to Canada for beer, but Fez lost his green card. Where did he find it?", 
                        answers: {a: "In his shoe",b: "Under his hat",c: "In his pocket",d: "In his underware"},
                        correctAnswer: "a",
                        correctAnswerWord: "In his shoe",
                        image: "<img src='./assets/images/fez-thumbs-up.gif'/>"},
                    
                        {question: "When Donna first tells Eric she loves him, what does he say back?", 
                        answers: {a: "I love panties",b: "I love cake",c: "I love you",d: "I love Wisconsin"},
                        correctAnswer: "b",
                        correctAnswerWord: "I love cake",
                        image: "<img src='./assets/images/i-love-cake.gif'/>"},
                    
                        {question: "What was the name of Donna's cat?", 
                        answers: {a: "Mr. Giggley",b: "Mr. Bonkers",c: "Mr. Beegle",d: "Mr. Bailey"},
                        correctAnswer: "b",
                        correctAnswerWord: "Mr. Bonkers",
                        image: "<img src='./assets/images/cat.gif'/>"},
                    
                        {question: "Which of the following was Laurie born with?", 
                        answers: {a: "Forked tongue",b: "An extra toe",c: "A horn",d: "A tail"},
                        correctAnswer: "d",
                        correctAnswerWord: "A tail",
                        image: "<img src='./assets/images/laurie.gif'/>"}];

                        console.log(triviaQuestions);
                        console.log(triviaQuestions[0].answers.b);
    

var timeRemaining = 15;
var intervalId;

var correctAnswer;                      // holds the value for the correct answer
var userAnswer;

var questionIndex = 0;                  // questionIndex will help loop through the array of triviaQuestions
var answeredRight = 0;
var answeredWrong = 0;
var unanswered = 0;

var themeSong = new Audio("./assets/audio/That-70s-show-theme-song.mp3");

// This is the function that will display the current question and answers
function renderTrivia() {
    userAnswer;
    $("#correct-answser").empty();
    $("#reveal-image").empty();
    run();

if (questionIndex <= (triviaQuestions.length - 1)) {                    // for loop that loops the triviaQuestion array
    $("#question").text(triviaQuestions[questionIndex].question);       // current questions

    $("#choice-A").html(triviaQuestions[questionIndex].answers.a);      // current answers
    $("#choice-B").html(triviaQuestions[questionIndex].answers.b);
    $("#choice-C").html(triviaQuestions[questionIndex].answers.c);
    $("#choice-D").html(triviaQuestions[questionIndex].answers.d);

    correctAnswer = triviaQuestions[questionIndex].correctAnswer;       // current correct answer
    console.log(correctAnswer);
}

// If there is no more questions to render. This will display the result 
else {
    $("#scores").html('Correct Answer: ' + answeredRight + '<br>' +
                        'Incorrect Answer: ' + answeredWrong + '<br>' +
                        'Unanswered: ' + unanswered);
    endResultImage();
    revealAnswer();
}
};

// The clock function.
function run() {
    if (questionIndex > triviaQuestions.length - 1){                // stops the clock if there is no more questions
        clearInterval(intervalId);
    }
    else {
        timeRemaining = 15;                                         // Runs the down from 15 seconds.
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    }
  };

  //  The decrement function.
  function decrement() {

    timeRemaining--;

    $("#clock").html("Time Remaining: " + timeRemaining + " Seconds");          // displays the the countdown timer

    if (timeRemaining === 0) {                   // Once the clock hits 0 seconds, stop the clock.
    clearInterval(intervalId);
    unanswered++;                               // increment unanswered
    

    $("#question").text("Out of Time!!");

    revealAnswer();
   
    setTimeout(function() {renderTrivia();}, 4000);
    }
  };

  // The reveal answer function. It shows the correct answer and a image while stopping the clock.
  function revealAnswer() {
    clearInterval(intervalId);

    $("#correct-answser").html("The Correct Answer was: " + triviaQuestions[questionIndex].correctAnswerWord);
    $("#reveal-image").html(triviaQuestions[questionIndex].image);

    $("#choice-A").empty();
    $("#choice-B").empty();
    $("#choice-C").empty();
    $("#choice-D").empty();
    questionIndex++;
  };

  // This function will take your answeredRight and give you an end result-image depending on how much you got right.
  function endResultImage() {
    $("#start-over").html("Start Over?")
    $("#title").empty();
    $("#clock").empty();
    $("#question").empty();

    if (answeredRight >= 8) {
        $("#result-image").html("<img src='./assets/images/leo.gif'/>");                // score between 8 - 11 gets this image 
    }
    else if (answeredRight >=4) {
        $("#result-image").html("<img src='./assets/images/jedi-dumbass.gif'/>");       // score between 4 - 7 gets this image
    }
    else {
        $("#result-image").html("<img src='./assets/images/giphy.gif'/>");              // score below 4 gets this image
    }

    themeSong.play();
  };

// This function checks to see if the choice clicked is correct/incorrect.
function compareAnswer(answerChoice) {
    if (answerChoice === correctAnswer) {
        answeredRight++;
        $("#question").text("Correct!!");
        revealAnswer();
        setTimeout(function() {renderTrivia();}, 4000);                    // this setTimeoutfunction will give 4 seconds of the correctAnswer and image until it continues to the next question.
    }
    else {
        answeredWrong++;
        $("#question").text("Wrong!!");
        revealAnswer();
        setTimeout(function() {renderTrivia();}, 4000);
    }
    console.log(answeredRight + "|" + answeredWrong + "|" + questionIndex);
};


$(document).ready(function(){

    // These are the click function for the multiple choices.
    $("#choice-A").click(function(){
        userAnswer = "a"
        compareAnswer(userAnswer);
    });

    $("#choice-B").click(function(){
        userAnswer = "b"
        compareAnswer(userAnswer);
    });

    $("#choice-C").click(function(){
        userAnswer = "c"
        compareAnswer(userAnswer);
    });

    $("#choice-D").click(function(){
        userAnswer = "d"
        compareAnswer(userAnswer);
    });

    // The click function that will start the game
    $("#start-game").click(function() {
        $('.bg').css('background-image','url(./assets/images/That-70s-show-disco.jpg)');        // change the background image
        $(".container").css("display", "block");                                                // display the trivia box
        $("#start-game").empty();                       
        renderTrivia();
    });

    // The click function that will reset the variables and the game.
    $("#start-over").click(function() {
        questionIndex = 0;
        answeredRight = 0;
        answeredWrong = 0;
        unanswered = 0;

        $("#question").empty();
        $("#scores").empty();
        $("#start-over").empty();
        $("#result-image").empty();

        renderTrivia();
    });
        
  });


