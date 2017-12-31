/*jshint esversion: 6 */
const letter = require("./letter.js");

wordToGuess = function(nameToGuess) {
  this.nameToGuess = nameToGuess;
  this.letterArray = nameToGuess.split("");
  this.wordLetters = [];

  for (var i = 0; i < this.letterArray.length; i += 1) {
    if (this.letterArray[i] === "(") {
      this.letterArray.splice(i);
    }
    if (this.letterArray[i] === "." || this.letterArray[i] === "-") {
      this.letterArray.splice(i, 1);
    }
  }

  for (i = 0; i < this.letterArray.length; i += 1) {
    var newLetter = new letterBreak(this.letterArray[i]);
    this.wordLetters.push(newLetter);
  }
  
  this.wordDisplay = function() {
    var display = "";
    this.wordLetters.forEach(function (ltr) {
      var currentLetter = ltr.gameBlanks();
      display += currentLetter;
    });
  };
};
