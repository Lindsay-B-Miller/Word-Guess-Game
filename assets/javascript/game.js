var wordOptions = ["adventure", "animals", "backpack", "campground", "campfire", "cabin", "compass", "equipment", "flashlight", "fishing", "forest", "hammock", "hike", "hiking boots", "bug spray", "lantern", "nature", "outdoors", "outside", "sleeping bag", "sunscreen", "tent", "water bottle", "waterfall"];
var letters = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// var buildWord;
var currentWord;
var userGuess;
var wrongGuess = [];
var correctGuess = [];
var placeholder = [];
var guessesLeft = 10;
var placeholderhtml = document.getElementsByClassName("placeholder");
var correctGuesshtml = document.getElementsByClassName("correctGuess");
// var wrongGuesshtml = document.getElementsByClassName("wrongGuess");
// var guessesLeft = document.getElementById("#guessesLeft")


//computer needs to choose a word
var currentWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
console.log(currentWord)

//create placeholder for letters in chosen word 
function generatePlaceholder() {
    for (var i = 0; i < currentWord.length; i++) {
        placeholder.push('_');

    }
    return placeholder;
}

//function for the number of guesses remaining
function numberGuessesRemain() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
};


//function for the display of wrong letters
function wrongLetters() {
    document.querySelector("#wrongGuess").innerHTML = "Your guesses so far: " + wrongGuess + " ";
}


placeholderhtml[0].innerHTML = generatePlaceholder().join(' ');


//reset function when game over or player wins
var reset = function () {

    guessesLeft = 10;
    placeholder = [];
    correctGuess = [];
    wrongGuess = [];
    placeholderhtml[0].innerHTML = generatePlaceholder().join(' ');
    var currentWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    wrongLetters();
    console.log(currentWord)
}


//user chooses a letter
document.onkeyup = function () {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess)

    if (letters.indexOf(userGuess) > -1) {



        //replace placeholder with chosen word
        if (currentWord.indexOf(userGuess) > -1) {
            // alerts if a correct letter has already been selected
            if (correctGuess.includes(userGuess)) {
                alert("You have already selected this letter. Please try a different letter")
            }
            correctGuess.push(userGuess);

            placeholder[currentWord.indexOf(userGuess)] = userGuess;
            placeholderhtml[0].innerHTML = placeholder.join(' ');
            // correctGuesshtml[0].innerHTML = correctGuess.join(' ');
            console.log(placeholder)

            // console.log(correctGuess);
        }

        //alerts if a wrong letter has already been selected
        else if (wrongGuess.includes(userGuess)) {
            alert("You have already selected this letter. Please try a different letter")
        }



        else if (currentWord.indexOf(userGuess) <= -1) {
            wrongGuess.push(userGuess);
            // wrongGuesshtml[0].innerHTML = wrongGuess.join('  ')
            guessesLeft--;
            numberGuessesRemain();
            wrongLetters();
            console.log(wrongGuess);
        };



        if (placeholder.join('') == currentWord) {
            alert("you win!");
            reset();
        }

        if (guessesLeft === 0) {
            alert("You lose! Please try again")
            reset();
        }

    };





};


document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;