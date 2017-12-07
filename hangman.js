var inquirer = require("inquirer");
var word = require("./word.js");
var letter = require("./letter.js");
var names = require("simpsons-names");
var ls = require("ls");

var randomName = names.random();
console.log(randomName)
inquirer
    .prompt([
{
    type: "confirm",
    message: "Would you like to play a game? (y or n)",
    name: "start",
    default: true
},
{

}
    ])

//Once the game is started, a word must be selected.
function game() {

}

var newWord = new wordToGuess(randomName);

newWord.init();
