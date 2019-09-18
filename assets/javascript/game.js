var wordOptions = ["adventure", "animals", "backpack", "campground", "campfire", "cabin", "compass", "equipment", "flashlight", "fishing", "forest", "hammock", "hike", "hiking boots", "bug spray", "lantern", "nature", "outdoors", "outside", "sleeping bag", "sunscreen", "tent", "water bottle", "waterfall"];
var buildWord;
var currentWord;
var userGuess;
var guessedLetters;
var placeholder = [];

//computer needs to choose a word
var currentWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
console.log(currentWord)

//create placeholder for letters in chosen word 
function generatePlaceholder() {
    for (var i = 0; i < currentWord.length; i++) {
        placeholder.push('_');
    }
    return placeholder
}
console.log(generatePlaceholder());

//user chooses a letter
document.onkeyup = function () {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess)

    //if userGuess is correct
    if (currentWord.indexOf(userGuess) > -1)
        console.log(true);
}


