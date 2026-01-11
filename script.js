// Game variables

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';
let gameIsActive = true;


// Game logic

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice){
        case 0: return "rock"
        case 1: return "paper"
        case 2: return "scissors"
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        roundWinner = 'draw';
    }
    
    else if (playerChoice == "rock" && computerChoice == "scissors" 
        || playerChoice == "paper" && computerChoice == "rock"
        || playerChoice == "scissors" && computerChoice == "paper") 
        {
            playerScore++;
            roundWinner = 'player'
        } 
    
    else {
        computerScore++;
        roundWinner = 'computer';
    }
}

const emojis = {
    rock: '✊🏻',
    paper:'🖐🏻',
    scissors: '✌🏻',
    unknown: '❔'
}


function updateScore(playerScore, computerScore){
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function updateSigns(playerChoice, computerChoice){
    playerSign.textContent = emojis[playerChoice];
    computerSign.textContent = emojis[computerChoice];
}

function updateCommentary(playerChoice, computerChoice){
    if (roundWinner == 'draw'){
        gameInfo.textContent = 'Draw!'
        commentary.textContent = `Both of you chose ${playerChoice}`
    }
    else if (roundWinner == 'player'){
        gameInfo.textContent = 'You won the round!'
        commentary.textContent = `${playerChoice} beats ${computerChoice}`
    }
    else {
        gameInfo.textContent = 'You lost the round!'
        commentary.textContent = `${computerChoice} beats ${playerChoice}`
    }
}

function gameOver() {
    if ((playerScore == 3 || computerScore == 3)) {
        gameIsActive = false;
        return true;
    }

    return false;
}

function announceWinner(){
    if (playerScore == 3){
        gameInfo.textContent = '🎉 You won the game! 🎉'
        commentary.textContent = '👉🏻 Refresh to play again 👈🏻'
    }
    else {
        gameInfo.textContent = '😢 You lost the game! 😢'
        commentary.textContent = '👉🏻 Refresh to play again 👈🏻'
    }
}

function handleClick(playerChoice) {

    if (!gameIsActive) return;

    const computerChoice = getComputerChoice();

    playRound(playerChoice, computerChoice);

    updateScore(playerScore, computerScore);

    updateSigns(playerChoice, computerChoice);

    updateCommentary(playerChoice, computerChoice);

    if (gameOver()){
        
        announceWinner();  
    }
}

// DOM elements

const gameInfo = document.getElementById('gameInfo');
const commentary = document.getElementById('commentary');
const playerSign = document.getElementById('playerSign');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerSign = document.getElementById('computerSign');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');


// Event listeners

rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'))