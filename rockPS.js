// Get CPU choice w/ getComputerChoice
    // Set variables for computerSelection, playerSelection and random number
    // Generate random number between 0-2
let computerSelection = undefined;
let playerSelection = undefined;
let num = Math.floor((Math.random() * 3));

    // Given number assign string RPS
function getComputerChoice(num) {
    if (num === 0) {
        computerSelection = "Rock";
    } else if (num === 1) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }    
}

getComputerChoice(num);
    
// Get user input w/ playerSelection
// Play a round of RPS given playerSelection and computerSelection
// Return winner

// Check outputs in console

console.log(num);
console.log(computerSelection);
console.log(playerSelection);

