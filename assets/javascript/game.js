var wordOptions = ["adventure", "animals", "backpack", "campground", "campfire", "cabin", "compass", "equipment", "flashlight", "fishing", "forest", "hammock", "hike", "hiking boots", "bug spray", "lantern", "nature", "outdoors", "outside", "sleeping bag", "sunscreen", "tent", "water bottle", "waterfall"];
var buildWord;
var currentWord;
var userGuess;
var incorrectGuess = [];
var correctGuess = [];
var placeholder = [];
var placeholderhtml = document.getElementsByClassName("placeholder");
var correctGuesshtml = document.getElementsByClassName("correctGuess");
var incorrectGuesshtml = document.getElementsByClassName("incorrectGuess");


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
// console.log(generatePlaceholder());

//user chooses a letter
document.onkeyup = function () {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess)



    //replace placeholder with chosen word
    if (currentWord.indexOf(userGuess) > -1) {
        correctGuess.push(userGuess);

        placeholder[currentWord.indexOf(userGuess)] = userGuess;
        placeholderhtml[0].innerHTML = placeholder.join(' ');
        correctGuesshtml[0].innerHTML = correctGuess.join(' ');
        console.log(placeholder)

        // console.log(correctGuess);
    }

    if (placeholder.join('') == currentWord) {
        alert("you win!");
    }
    else {
        incorrectGuess.push(userGuess);
        incorrectGuesshtml[0].innerHTML = incorrectGuess.join(' ')
        console.log(incorrectGuess);
    }

};

placeholderhtml[0].innerHTML = generatePlaceholder().join(' ');
