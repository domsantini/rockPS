// Set variables for cpuSelection, playerSelection and generate random number between 0-2
let cpuSelection = undefined;
let playerSelection = undefined;

// const rock = document.querySelector(".rock");
// const paper = document.querySelector('.paper');
// const scissors = document.querySelector('.scissors');
const buttons = document.querySelectorAll('button');

const youScore = document.querySelector('.youScore');
const cpuScore = document.querySelector('.cpuScore');

// Create counter variables for wins / losses
let wins = 0;
let losses = 0;


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.classList.value;
        console.log(`Player Selection: ${playerSelection}`);
        getComputerChoice();
    })
})

// Define getComputerChoice function
function getComputerChoice() {
    let num = Math.floor((Math.random() * 3));

    if (num === 0) {
        cpuSelection = "rock";
    } else if (num === 1) {
        cpuSelection = "paper";
    } else {
        cpuSelection = "scissors";
    }
    
    console.log(`Computer Selection: ${cpuSelection}`);
}

// Display scores 
youScore.textContent = wins;
cpuScore.textContent = losses;


// Check for ties
// if (cpuSelection === playerSelection) {
//     getComputerChoice(num);
//     getPlayerChoice();
// }



// Play a round of RPS given playerSelection and cpuSelection
// function playRound(cpuSelection, playerSelection) {
//     if ((cpuSelection === "rock" && playerSelection === "paper") || 
//     (cpuSelection === "paper" && playerSelection === "scissors") || 
//     (cpuSelection === "scissors" && playerSelection === "rock")) {
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