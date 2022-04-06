var start = document.querySelector("#start-btn")
var display = document.querySelector(".quiz")
var countdowns = document.querySelector("#timer")
var index = 0
var isComplete = false
var timeLeft = 115
var score = 0

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
        
    
        var timeInterval = setInterval(function(){
            if (isComplete === true){
                clearInterval(timeInterval)
                countdowns.textContent = ""
                console.log(timeLeft + " " + score)
                
            }
            else if (timeLeft > 0) {
                countdowns.textContent = timeLeft;
                timeLeft --;
            }
            else {
                countdowns.textContent= "times up!";
                clearInterval(timeInterval);
            }
        }, 1000);
    }
    
    displayQuestions(index)
    countdown()  
})

function displayQuestions (index) {
    questionSelect = questions[index].question;
    optionaSelect = questions[index].answers.a;
    optionbSelect = questions[index].answers.b;
    optioncSelect = questions[index].answers.c;
    optiondSelect = questions[index].answers.d;
    optioneSelect = questions[index].answers.e;
    answerSelect = questions[index].correctAnswer;
    display.innerHTML = (questionSelect  + "<br><button id='btn-a'> a: " + optionaSelect + "</button>" + "<br><button id='btn-b'> b: " + optionbSelect + "</button>" + "<br><button id='btn-c'> c: " + optioncSelect + "</button>" + "<br><button id='btn-d'> d: " + optiondSelect + "</button>" + "<br><button id='btn-e'> e: " + optioneSelect + "</button>");
    
index++ 
    var optA = document.querySelector("#btn-a")
    optA.addEventListener("click", function(){ 
        if ( optionaSelect == answerSelect){
            console.log("that is correct!")
            if (index< questions.length){
                
                console.log(score)
                displayQuestions(index)
            }
            else {
                console.log("hooray")
                displayScoreBoard()
            }
        }
        else {
            console.log("try again")
            score-=5
        }
    })

    var optB = document.querySelector("#btn-b")
    optB.addEventListener("click", function(){ 
        if ( optionbSelect == answerSelect){
            console.log("that is correct!")
            if (index< questions.length){
                
                console.log(score)
                displayQuestions(index)
            }
            else {
                console.log("hooray")
                displayScoreBoard()
            }
        }
        else {
            console.log("try again")
            score-=5
        } 
    })
    
    var optC = document.querySelector("#btn-c")
    optC.addEventListener("click", function(){ 
        if ( optioncSelect == answerSelect){
            console.log("that is correct!")
            if (index< questions.length){
                
                console.log(score)
                displayQuestions(index)
            }
            else {
                console.log("hooray")
                displayScoreBoard()
            }
        }
        else {
            console.log("try again")
            score-=5
        } 
    })
    
    var optD = document.querySelector("#btn-d")
    optD.addEventListener("click", function(){ 
        if ( optiondSelect == answerSelect){
            console.log("that is correct!")
            if (index< questions.length){
                
                console.log(score)
                displayQuestions(index)
            }
            else {
                console.log("hooray")
                displayScoreBoard()
            }
        }
        else {
            console.log("try again")
            score-=5
        } 
    })
    
    var optE = document.querySelector("#btn-e")
    optE.addEventListener("click", function(){ 
        if ( optioneSelect == answerSelect){
            console.log("that is correct!")
            
            console.log(score)
            if (index< questions.length){
                displayQuestions(index)
            }
            else {
                console.log("hooray")
                displayScoreBoard()
            }
        }
        else {
            console.log("try again")
            score-=5
        } 
    })
}



function displayScoreBoard (){
    var scoreboard = []
    localStorage.getItem("scoreboard", scoreboard)
    score = score + timeLeft
    isComplete = true
    display.innerHTML=("Congrats! You scored " + score + "<br><br><form><label> Initials:</label><input type='text'id ='initialSave'><br><form><label><br><button id='submit'>Submit Score</button><br><br><section id='score-board-box></section>")

    var submitBtn = document.querySelector("#submit")
    var userInitials = document.querySelector("#initialSave")

    submitBtn.addEventListener("click", function(event){
        console.log("clicked")
        event.preventDefault()
        console.log(userInitials.value)

    localStorage.getItem("userInitials", userInitials.value)
    localStorage.getItem("score", score)

    localStorage.setItem("score", score)
    localStorage.setItem("userInitials", userInitials.value)
    
    scoreboard.push(userInitials.value + " " + score)

    localStorage.setItem("scoreboad", scoreboard)
    localStorage.getItem("scoreboard", scoreboard)
    
    console.log(scoreboard)
    display.innerHTML=("<ul><li id='score'>" + scoreboard + "</li></ul>" + "<button id='delete'>Delete</button><br><br><br><button id='reset'>Try Again</button>")

    var reset = document.querySelector("#reset")
    var deleteScore = document.querySelector("#delete")
    var userScore = document.querySelector("#score")

    reset.addEventListener("click", function(){
        window.location.replace("./index.html")
    })

    deleteScore.addEventListener("click", function(){
        userScore.replace("")
    })

    })
    console.log(scoreboard)
 }  