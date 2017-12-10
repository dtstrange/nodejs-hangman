//require letter constructor
var Letter = require("./letter.js");



function Word(wrd){
    var that = this;
    //store string for wrd
    this.word = wrd; 
    //collection of letter
    this.letter = [];
    this.wordFound = false;

    this.getLetters = function(){
        for(var i=0; i<this.word.length; i++){
            var newLetter = new Letter(that.word[i]);
            this.letter.push(newLetter);
        }
    };

    //found the current word
    this.findTheWord = function(){
        if(this.letter.every(function(lttr){
            return lttr.appear === true;
        })){
            this.wordFound = true;
            return true;
        }
    };

    this.checkIfLetterFound = function(guessedLetter){
        var whatToReturn = 0;

        this.letter.forEach(function(lttr){
            if(lttr.letter === guessedLetter){
                lttr.appear = true;
                whatToReturn++;
            }
        })
        return whatToReturn;
    };

    this.wordRender = function(){
        var display = '';

        this.letter.forEach(function(lttr){
            var currentLetter = lttr.letterRender();
            display+= currentLetter;
        });

        return display;
    };

};

module.exports = Word;

