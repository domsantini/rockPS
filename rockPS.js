// Set variables for computerSelection, playerSelection and generate random number between 0-2
let computerSelection = undefined;
let playerSelection = undefined;
let num = Math.floor((Math.random() * 3));

// Define getComputerChoice function
function getComputerChoice(num) {
    if (num === 0) {
        computerSelection = "Rock";
    } else if (num === 1) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }    
}

// Run getComputerChoice function and assign computerSelection
getComputerChoice(num);
    
// Get user input w/ playerSelection
playerSelection = prompt("What's your selection?");

// Play a round of RPS given playerSelection and computerSelection
// Return winner

// Check outputs in console

console.log(num);
console.log(computerSelection);
console.log(playerSelection);

