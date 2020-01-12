function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);
    return (randomNumber === 0) ? 'Rock'
            : (randomNumber === 1) ? 'Paper'
            : 'Scissors';
}

function restart() {
    gameIsActive = true;

    // Restore variables to the initial values
    roundNumber = 0;
    playerScore = 0;
    computerScore = 0;

    roundNumberDisplay.innerHTML = `Round ${roundNumber}/5`;
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;

    // Remove images of the last round
    playerChoiceDisplay.removeAttribute('src');
    computerChoiceDisplay.removeAttribute('src');

    // Make buttons look active
    rockButton.classList.remove('not-active');
    paperButton.classList.remove('not-active');
    scissorsButton.classList.remove('not-active');

    // Hide game result window
    gameResult.style.visibility = 'hidden';
}

function playRound(playerChoice, computerChoice) {
    roundNumber++;

    if (playerChoice === computerChoice) {
        return `Draw! You both picked ${playerChoice}.`;
    } else if (
        playerChoice === "Rock" && computerChoice === "Scissors" ||
        playerChoice === "Paper" && computerChoice === "Rock" ||
        playerChoice === "Scissors" && computerChoice === "Paper"
    ) {
        playerScore++;
        return `${playerChoice} beats ${computerChoice}. You win the round!`;
    } else {
        computerScore++;
        return `${computerChoice} beats ${playerChoice}. AI wins the round!`;
    }
}

function game(playerChoice) {
    if (gameIsActive) {
        const computerChoice = computerPlay();

        // Display human and computer choices in the browser
        playerChoiceDisplay.setAttribute('src', (playerChoice === 'Rock') ? 'images/rock-right.png'
                : (playerChoice === 'Paper') ? 'images/paper-right.png'
                : 'images/scissors-right.png');

        computerChoiceDisplay.setAttribute('src', (computerChoice === 'Rock') ? 'images/rock-left.png'
                : (computerChoice === 'Paper') ? 'images/paper-left.png'
                : 'images/scissors-left.png');

        playRound(playerChoice, computerChoice);
        roundNumberDisplay.innerHTML = `Round ${roundNumber}/5`;

        playerScoreDisplay.innerHTML = playerScore;
        computerScoreDisplay.innerHTML = computerScore;

        // End of the game
        if (roundNumber === 5) {
            if (playerScore === computerScore) {
                gameResultDisplay.innerHTML = 'Draw!';
                gameResult.style['background-image'] = 'linear-gradient(to bottom, #6214bed4 20%, #8172c4 100%)';
            } else if (playerScore > computerScore) {
                gameResultDisplay.innerHTML = 'You Win!';
                gameResult.style['background-image'] = 'linear-gradient(rgba(23, 120, 245, 0.8) 20%, rgb(87, 150, 201) 100%)';
            } else {
                gameResultDisplay.innerHTML = 'AI Wins!';
                gameResult.style['background-image'] = 'linear-gradient(to bottom, #ff0844d4 20%, #d26f6f 100%)';
            }

            gameResult.style.visibility = 'visible';
            gameIsActive = false;

            // Make buttons look inactive
            rockButton.classList.add('not-active');
            paperButton.classList.add('not-active');
            scissorsButton.classList.add('not-active');
        }
    }
}

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;
let gameIsActive = true;

const roundNumberDisplay =
        document.querySelector('.round-number');

const playerChoiceDisplay =
        document.querySelector('#human-choice img');
const computerChoiceDisplay =
        document.querySelector('#computer-choice img');

const playerScoreDisplay =
        document.querySelector('#human-score');
const computerScoreDisplay =
        document.querySelector('#computer-score');

const gameResult =
        document.querySelector('.game-result-container');
const gameResultDisplay =
        document.querySelector('.game-result-container p');

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const restartButton = document.querySelector('#restart-button');

rockButton.addEventListener('click', function () { game('Rock') });
paperButton.addEventListener('click', function () { game('Paper') });
scissorsButton.addEventListener('click', function () { game('Scissors') });
restartButton.addEventListener('click', restart);