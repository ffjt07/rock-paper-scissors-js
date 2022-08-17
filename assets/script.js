// Variables
var wins = 0
var losses = 0
var ties = 0

var rps = ["R", "P", "S"] 

var play = function () {
    var userChoice = prompt ("Choose your weapon: R, P or S").toUpperCase();

    var options = Math.floor(Math.random()*rps.length);


// Computer Choice

    var compChoice = rps[options]

    alert ("Computer chooses: " + compChoice)
    if (compChoice === userChoice) {
    ties++
    alert("It's a Tie!");

    }   else if (
    (compChoice === "R" && userChoice === "P") ||
    (compChoice === "P" && userChoice === "S") ||
    (compChoice === "S" && userChoice === "R") 
    ) {
    wins++
    alert("Winner!")
    }   else {
    losses++
    alert("Loss")
    }

    alert ("Wins: " + wins + "\nLosses: " + losses + "\nTies: " +ties);

    var playAgain = confirm("Play again?")

    if (playAgain){
    play();
    }   else {
        alert("Thanks for playing")
    }
}
play ()