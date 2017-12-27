wordToGuess = function(nameToGuess) {
  this.nameToGuess = nameToGuess;
  this.letterArray = nameToGuess.split("");
  for(var i = 0; i < this.letterArray.length; i +=1) {
    if (this.letterArray[i] === "(") {
      this.letterArray.splice(i);
    }
  }
};
