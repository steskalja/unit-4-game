
    

    


function GenerateLetter(){
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var random = Math.floor(Math.random() * 26);
    return letters[random];

}

function GuessLetter(cLetter,uLetter){
    
    if(cLetter === uLetter)
    {
        return true;
    
    }
    else
    {
        return false;
    }

}

var CompGuess = GenerateLetter();
var Guesses = 0;
var uWins = 0;
var uLoss =0;
document.onkeyup = function(e){
    if(GuessLetter(CompGuess,e.key.toUpperCase())){
       var rslt = document.getElementById("GuessResults");
       rslt.innerHTML = "You Win, Try Again";
       uWins++;
       document.getElementById("Wins").innerHTML = uWins;
       document.getElementById("ltried").innerHTML = "";
       Guesses = 0;
       CompGuess = GenerateLetter();

    }
    else if(Guesses < 4 && !GuessLetter(CompGuess,e.key.toUpperCase()))
    {
        var rslt = document.getElementById("GuessResults");
        rslt.innerHTML = "Try Again";
        var lBank = document.getElementById("ltried");
        lBank.innerHTML = e.key.toUpperCase() + ' ' + lBank.innerHTML;
        Guesses++;
    }
    else if(Guesses === 4 && !GuessLetter(CompGuess,e.key.toUpperCase()))
    {
        document.getElementById("GuessResults").innerHTML = "You Loose!, Try Again";
        uLoss++;
        document.getElementById("Losses").innerHTML = uLoss;
        document.getElementById("ltried").innerHTML = "";
        Guesses = 0;
        CompGuess = GenerateLetter();
    }
};

function gReset(){
    Guesses = 0;
    uWins = 0;
    uLoss =0;
    CompGuess = GenerateLetter();
    document.getElementById("Losses").innerHTML = uLoss;
    document.getElementById("Wins").innerHTML = uWins;
    document.getElementById("ltried").innerHTML = "";
    document.getElementById("GuessResults").innerHTML = "";
}