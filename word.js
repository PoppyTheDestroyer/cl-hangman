/*jshint esversion: 6 */
const letter = require("./letter.js");

wordToGuess = function(nameToGuess) {
  this.nameToGuess = nameToGuess;
  this.letterArray = nameToGuess.split("");
  for (var i = 0; i < this.letterArray.length; i += 1) {
    if (this.letterArray[i] === "(") {
      this.letterArray.splice(i);
    }
    if (this.letterArray[i] === "." || this.letterArray[i] === "-") {
      this.letterArray.splice(i, 1);
    }
  }
};
