let cpuSelection = undefined;
let playerSelection = undefined;

const buttons = document.querySelectorAll('button');
const youScore = document.querySelector('.youScore');
const cpuScore = document.querySelector('.cpuScore');
const results = document.querySelector('.resultsContainer');

let wins = 0;
let losses = 0;

// Add event listener to buttons and run game
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        results.textContent = '';
        playerSelection = button.classList.value;
        console.log(`Player Selection: ${playerSelection}`);
        getComputerChoice();
        
        if (playerSelection === cpuSelection) {
            results.textContent = "Uh oh, a tie. Select again!";
        } else {
            playRound(cpuSelection, playerSelection);
            updateScores(youScore, cpuScore, wins, losses);
        };
        
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

// Play a round of RPS given playerSelection and cpuSelection
function playRound(cpuSelection, playerSelection) {
    if ((cpuSelection === "rock" && playerSelection === "paper") || 
    (cpuSelection === "paper" && playerSelection === "scissors") || 
    (cpuSelection === "scissors" && playerSelection === "rock")) {
        results.textContent = 'You win! Noice!';
        wins++;
    } else {
        results.textContent = 'Ah nuts.. L : /';
        losses++;
    }
}

function updateScores(youScore, cpuScore, wins, losses) {
    youScore.textContent = wins;
    cpuScore.textContent = losses;
}