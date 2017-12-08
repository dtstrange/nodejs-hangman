var Letter = function(ltr){
    //variable to store letter
    this.letter = ltr;
    //boolean for displaying letter
    this.appear = false;

    this.letterRender = function(){
        //renders blanks if incorrect
        if(this.appear === false){
            return '_ ';
        }
        //renders letter if correct
        else{
            return this.letter;
        }
    }



};

module.exports = Letter;