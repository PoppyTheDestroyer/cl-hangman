/*jshint esversion: 6 */
letterBreak = function(letters) {
  this.letters = letters;
  this.showLetter = false;
  this.wordLetters = [];
  /*this.lettersArray = function() {
    for (var i = 0, j = 0; i < letters.length; i++) {
      wordLetters[j] = letters.charAt(i);
      j += 1;
      if (letters[i] != " ") {
        wordLetters[j] = false;
      } else if (letters[i] === "." || letters[i] === ",") {
        wordLetters[j] = true;
      } else {
        wordLetters[j] = true;
      }
      j += 1;
      if (wordLetters[j] === false) {
        this.wordLetters.push("_");
      } else {
        this.wordLetters.push(" ");
      }
    }
  };*/
  this.lettersArray = function(letters) {
    for (var i = 0; i < this.letters.length; i +=1) {
      if (this.letters.charAt(i) === " ") {
        this.wordLetters.push(" ");
      } else {
        this.wordLetters.push("_");
      }
    }
  }
};
