var start = document.querySelector("#start-btn")
var display = document.querySelector(".quiz")
var countdowns = document.querySelector("#timer")

var questions = [
    {
        question: "What kind of animal is Roo?",
        answers: {
         a: "cat",
         b: "dog",
         c: "horse",
         d: "duck",
         e: "all of the above",
        },
        correctAnswer: "cat"
    },

    {
        question: "What kind of cat is Roo?",
        answers: {
         a: "funny",
         b: "sweet",
         c: "playful",
         d: "has major fomo",
         e: "all of the above",
        },
        correctAnswer: "all of the above",
    },

    {
        question: "What is Roo's nickname?",
        answers: {
         a: "boo",
         b: "aboo",
         c: "boogatoo",
         d: "arugula",
         e: "all of the above",
        },
        correctAnswer: "all of the above",
    },

    {
        question: "Which place is Roo's favorite place to play?",
        answers: {
         a: "her cat tree",
         b: "the window",
         c: "the bathtub",
         d: "the bedroom",
         e: "all of the above",
        },
        correctAnswer: "the bathtub",
    },

    {
        question: "What is Roo's favorite toy?",
        answers: {
         a: "piggy",
         b: "lama",
         c: "small blue foam nerf dart",
         d: "butterfly",
         e: "all of the above",
        },
        correctAnswer: "small blue foam nerf dart",
    }
]


start.addEventListener("click", function(){
    function countdown () {
        var timeLeft = 115
    
        var timeInterval = setInterval(function(){
            if (timeLeft > 0) {
                countdowns.textContent = timeLeft;
                timeLeft --;
            }
            else {
                countdowns.textContent= "times up!";
                clearInterval(timeInterval);
            }
        }, 1000);
    }
    displayQuestions()
    countdown()  
})

function displayQuestions () {
    questionSelect = questions[0].question;
    optionaSelect = questions[0].answers.a;
    optionbSelect = questions[0].answers.b;
    optioncSelect = questions[0].answers.c;
    optiondSelect = questions[0].answers.d;
    optioneSelect = questions[0].answers.e;
    answerSelect = questions[0].correctAnswer;
    display.innerHTML = (questionSelect  + "<br><button id='btn-a'> a: " + optionaSelect + "</button>" + "<br><button id='btn-b'> b: " + optionbSelect + "</button>" + "<br><button id='btn-c'> c: " + optioncSelect + "</button>" + "<br><button id='btn-d'> d: " + optiondSelect + "</button>" + "<br><button id='btn-e'> e: " + optioneSelect + "</button>");

    var optA = document.querySelector("#btn-a")
    optA.addEventListener("click", function(){ 
        if ( optionaSelect == answerSelect){
            console.log("that is correct!")
        }
        else {
            console.log("try again")
        }
    })

    var optB = document.querySelector("#btn-b")
    optB.addEventListener("click", function(){ 
        if ( optionbSelect == answerSelect){
            console.log("that is correct!")
        }
        else {
            console.log("try again")
        } 
    })
    
    var optC = document.querySelector("#btn-c")
    optC.addEventListener("click", function(){ 
        if ( optioncSelect == answerSelect){
            console.log("that is correct!")
        }
        else {
            console.log("try again")
        } 
    })
    
    var optD = document.querySelector("#btn-d")
    optD.addEventListener("click", function(){ 
        if ( optiondSelect == answerSelect){
            console.log("that is correct!")
        }
        else {
            console.log("try again")
        } 
    })
    
    var optE = document.querySelector("#btn-e")
    optE.addEventListener("click", function(){ 
        if ( optioneSelect == answerSelect){
            console.log("that is correct!")
        }
        else {
            console.log("try again")
        } 
    })
}