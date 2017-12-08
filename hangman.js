//required packages
var inquirer = require("inquirer");
var isLetter = require('is-letter');

var count = 10;

var questions = function() {

    console.log();

    inquirer.prompt([
        {
            type: 'input',
            name: 'hang_question',
            message: "Guess a letter"
        }
    ])

    .then(function (answers) {

    })

};