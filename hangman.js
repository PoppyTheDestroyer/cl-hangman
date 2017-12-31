/*jshint esversion: 6 */
const inquirer = require("inquirer");
const word = require("./word.js");
const letter = require("./letter.js");
const names = require("simpsons-names");
const isLetter = require("is-letter");

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

console.log(newWord.letterArray);
