var letter = require("./letter.js");

function wordToGuess(nameToGuess) {
    this.nameToGuess = nameToGuess;
    this.letterArray = [];
    this.guessedLetters = [];
    this.guessesWrong = 0;
    this.init = function() {
        var wordBreak = new letterBreak(nameToGuess);
    }
}

module.exports = word;