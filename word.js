//require letter constructor
var Letter = require("./letter.js");

//array of words to be used
var creatures = ["BASILISK", "CENTAUR",
"CHIMERA", "DRAGON",
"GORGON", "GRIFFIN",
"HYDRA", "KRAKEN",
"MANTICORE", "MINOTAUR",
"PEGASUS", "PHOENIX",
"PSYCLOPS", "SAYTR"
]

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
            this.letters.push(newLetter);
        }
    };

    //found the current word
    this.findTheWord = function(){
        if(this.letters.every(function(lttr){
            return lttr.appear === true;
        })){
            this.wordFound = true;
            return true;
        }
    };

    this.checkIfLetterFound = function(guessedLetter){
        var whatToReturn = 0;

        this.letters.forEach(function(lttr){
            if(lttr.letter === guessedLetter){
                lttr.appear = true;
                whatToReturn++;
            }
        })
        return whatToReturn;
    };

    this.wordRender = function(){
        var display = '';

        this.letters.forEach(function(lttr){
            var currentLetter = lttr.letterRender();
            display+= currentLetter;
        });

        return display;
    };

};

module.exports = Word;
module.exports = creatures;