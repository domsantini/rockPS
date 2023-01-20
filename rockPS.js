// Set variables for computerSelection, playerSelection and generate random number between 0-2
let computerSelection = undefined;
let playerSelection = undefined;

// const rock = document.querySelector(".rock");
// const paper = document.querySelector('.paper');
// const scissors = document.querySelector('.scissors');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.classList.value;
    })
})

// Define getComputerChoice function
function getComputerChoice() {
    let num = Math.floor((Math.random() * 3));

    if (num === 0) {
        computerSelection = "rock";
    } else if (num === 1) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }    
}

// Run getComputerChoice function and assign computerSelection
// getComputerChoice(num);
    
// Get user input w/ playerSelection
// function getPlayerChoice() {
//     playerSelection = prompt("What's your selection?").toLowerCase();

//     // Validate user input
//     while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
//         playerSelection = prompt(`${playerSelection} is an invalid input. Please try "rock", "paper", or "scissors"!`).toLowerCase();
//     }
// }

// getPlayerChoice();

// Check for ties
// if (computerSelection === playerSelection) {
//     getComputerChoice(num);
//     getPlayerChoice();
// }


// Create counter variables for wins / losses
// let wins = 0;
// let losses = 0;

// Play a round of RPS given playerSelection and computerSelection
// function playRound(computerSelection, playerSelection) {
//     if ((computerSelection === "rock" && playerSelection === "paper") || 
//     (computerSelection === "paper" && playerSelection === "scissors") || 
//     (computerSelection === "scissors" && playerSelection === "rock")) {
//         wins++;
//     } else {
//         losses++;
//     }
// }


// if (wins > losses) {
//     alert(`You won! You got ${wins} wins and the cpu got ${losses}.`);
// } else {
//     alert(`You lost : / CPU got ${losses} wins and you got ${wins}.`);
// };