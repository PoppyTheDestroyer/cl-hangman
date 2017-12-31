/*jshint esversion: 6 */
letterBreak = function(letters) {
  this.letters = letters;
  this.showLetter = false;
  this.gameBlanks = function() {
    if (this.letters === " ") {
      this.showLetter = true;
      return "  ";
    }
    if (this.showLetter === false) {
      return " _ ";
    } else {
      return this.letters;
    }
  };
};
