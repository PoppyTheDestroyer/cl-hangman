/*jshint esversion: 6 */
letterBreak = function(letters) {
  this.letters = letters;
  this.showLetter = false;
  this.wordLetters = [];
  this.lettersArray = function() {
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
        return "_";
      } else {
        return " "
      }
    }
  };
};
