function letterBreak(wordDestroy) {
    this.wordDestroy = wordDestroy;
    this.lettersArray = function () {
        for (var i = 0, j = 0; i < wordDestroy.length; i++) {
            wordLetters[j] = wordDestroy.charAt(i);
            j++
            if (wordDestroy.charAt(i) != " ") {
                wordLetters[j] = false;
            }
            else {
                wordLetters[j] = true;
            } j++
        }
    }
}

module.exports = letter;