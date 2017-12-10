var inquirer = require("inquirer");
var word = require("./word.js");
var letter = require("./letter.js");
var names = require("simpsons-names");

var randomName = names.random();
var newWord = []
//console.log(randomName.split([""]))
/*inquirer.prompt([
    {
        type: "confirm",
        message: "Would you like to play a game?",
        name: "start",
        default: null
    }
])
    .then(function (inquirerResponse) {
        if (inquirerResponse === true) {
            game();
        }
    })
*/
//Once the game is started, a word must be selected.
function game() {

}

var newWord = new wordToGuess(randomName);
var wordBreak = new letterBreak(nameToGuess);

//console.log(newWord.letterArray)


