var inquirer = require("inquirer");
var word = require("./word.js");
var letter = require("./letter.js");
var names = require("simpsons-names");

var allNames = names.all;
var randomName = names.random();
var newWord = [];
var wordbreak;
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
function game() {}

var newWord = new wordToGuess(randomName);
var wordBreak = new letterBreak(newWord.letterArray);

console.log(newWord.letterArray);
