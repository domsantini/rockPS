// Set variables for computerSelection, playerSelection and generate random number between 0-2
let computerSelection = undefined;
let playerSelection = undefined;
let num = Math.floor((Math.random() * 3));

// Define getComputerChoice function
function getComputerChoice(num) {
    if (num === 0) {
        computerSelection = "rock";
    } else if (num === 1) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }    
}

// Run getComputerChoice function and assign computerSelection
getComputerChoice(num);
    
// Get user input w/ playerSelection
playerSelection = prompt("What's your selection?").toLowerCase()

// Ensure user input is valid
while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
    playerSelection = prompt(`${playerSelection} is an invalid input. Please try "rock", "paper", or "scissors"!`).toLowerCase();
}

// Play a round of RPS given playerSelection and computerSelection
//function playRound(computerSelection, playerSelection) {}

// Return winner

// Check outputs in console

console.log(num);
console.log(computerSelection);
console.log(playerSelection);

