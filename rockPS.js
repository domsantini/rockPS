let cpuSelection = undefined;
let playerSelection = undefined;

const buttons = document.querySelectorAll('.rock, .paper, .scissors');
const playAgain = document.querySelector('.playAgain');
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
        
        if (tie(playerSelection, cpuSelection)) {
        } else {
            playRound(cpuSelection, playerSelection);
            updateScores(youScore, cpuScore, wins, losses);
            checkWinner(wins, losses, endGame);
        };
    });
});

playAgain.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    
    youScore.textContent = wins;
    cpuScore.textContent = losses;
    results.textContent = '';
    
    buttons.forEach((button) => {
        button.style = 'display:show';
    });
    playAgain.style = 'display:none';
    
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

function tie(playerSelection, cpuSelection) {
    if (playerSelection === cpuSelection) {
        results.textContent = "uh oh, a tie. select again!";
        return true;
}};

// Display scores 
youScore.textContent = wins;
cpuScore.textContent = losses;

// Play a round of RPS given playerSelection and cpuSelection
function playRound(cpuSelection, playerSelection) {
    if ((cpuSelection === "rock" && playerSelection === "paper") || 
    (cpuSelection === "paper" && playerSelection === "scissors") || 
    (cpuSelection === "scissors" && playerSelection === "rock")) {
        results.textContent = 'you win this round! noice!';
        wins++;
    } else {
        results.textContent = 'shoot.. cpu takes that round.';
        losses++;
    }
}

function updateScores(youScore, cpuScore, wins, losses) {
    youScore.textContent = wins;
    cpuScore.textContent = losses;    
}

function endGame(buttons, playAgain) {
    buttons.forEach((button) => {
        button.style = 'display:none'
    });
    playAgain.style = 'display:show';
}

function checkWinner(wins, losses, endGame) {
    if (wins === 5) {
        results.textContent = "you won!! congrats 🥳";
        endGame(buttons, playAgain);
    } else if (losses === 5) {
        results.textContent = "darn.. better luck next time!"
        endGame(buttons, playAgain);
    }
}