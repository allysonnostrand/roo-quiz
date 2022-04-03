var start = document.querySelector("#start-btn")
var display = document.querySelector(".box")
var countdowns = document.querySelector("#timer")

var questions = [
    {
        question: "What kind of animal is Roo?",
        answers: {
         a: "cat"
         b: "dog"
         c: "horse"
         d: "duck"
         e: "all of the above"
        }
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
    countdown()   

    function displayQuestions () {
        display = element.innerHtml 
    }
    
})

/* when start is clicked then timer starts and the first quiz question is displayed*/
    /* event listener function set to change html class purple to quiz questions*/ 
    /* make a object to include quiz questions*/ 

/* when a false answer is clicked 5 seconds from timer is reduced*/

/* when a true answer is clicked then the next set of questions appear*/
    /*for loop for displaying each set of questions, if statements?*/ 
    /*user score gets tallyed for each true option selected, saved in local storage*/

/* when the timer runs out then a "times up!" is displayed, after a few moments the score board is displayed*/
    /*make times up a part of the for loop?*/ 
    /* include an input form to scores page that saves user input to storage*/
    /* user data is saved and displayed under high scores*/ 
    /* clear button so that the input and all input is not permanent*/ 
