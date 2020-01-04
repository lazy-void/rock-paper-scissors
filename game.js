function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);
    return (randomNumber === 0) ? 'Rock'
            : (randomNumber === 1) ? 'Paper'
            : 'Scissors';
}

function playRound(playerSelection, computerSelection) {
    roundNumber++;

    if (playerSelection === computerSelection) {
        return `Draw! You both picked ${playerSelection}.`;
    } else if (
        playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper"
    ) {
        playerScore++;
        return `${playerSelection} beats ${computerSelection}. You Win!`;
    } else {
        computerScore++;
        return `${computerSelection} beats ${playerSelection}. AI Wins!`;
    }
}

function game(playerSelection) {
    if (roundNumber >= 5) {
        playerScore = 0;
        computerScore = 0;
        roundNumber = 0;
        gameResultDisplay.innerHTML = '';
    }

    const computerSelection = computerPlay();

    roundInformationDisplay.innerHTML = playRound(playerSelection, computerSelection);
    roundNumberDisplay.innerHTML = `Round ${roundNumber}`;

    playerScoreDisplay.innerHTML = `You: ${playerScore}`;
    computerScoreDisplay.innerHTML = `AI: ${computerScore}`; 

    if (roundNumber === 5) {
        gameResultDisplay.innerHTML = (playerScore === computerScore) ? 'Draw!'
                : (playerScore > computerScore) ? 'You Win!'
                : 'You Lose!'; 
    }
}

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

const roundNumberDisplay =
        document.querySelector('#currentRound p:first-child');
const roundInformationDisplay =
        document.querySelector('#currentRound p:last-child');
const playerScoreDisplay =
        document.querySelector('#scores p:first-child');
const computerScoreDisplay =
        document.querySelector('#scores p:last-child');
const gameResultDisplay =
        document.querySelector('#result p');

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

rockButton.addEventListener('click', function () { game('Rock') });
paperButton.addEventListener('click', function () { game('Paper') });
scissorsButton.addEventListener('click', function () { game('Scissors') });

