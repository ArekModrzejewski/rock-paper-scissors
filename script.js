//computerPlay decides computer's choice
function computerPlay() {
    let i = Math.floor(Math.random() * 3) //random integer <0,2>
    if (i === 0) return 'Rock';
    if (i === 1) return 'Paper';
    if (i === 2) return 'Scissors';
}
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
        document.querySelector('#score').textContent = `Player ${playerScore}:${computerScore} Computer`;
    });
});

//function simulating one round, displaying result
function playRound(playerChoice) {
    let computerChoice = computerPlay();
    let result;
    if (playerChoice == 'Rock') {
        if (computerChoice == 'Scissors') {
            result = 'player';
        }
        else if (computerChoice == 'Paper') {
            result = 'computer';
        }
        else {
            result = 'draw';
        }
    }
    else if (playerChoice == 'Paper') {
        if (computerChoice == 'Rock') {
            result = 'player';
        }
        else if (computerChoice == 'Scissors') {
            result = 'computer';
        }
        else {
            result = 'draw';
        }
    }
    else if (playerChoice == 'Scissors') {
        if (computerChoice == 'Paper') {
            result = 'player';
        }
        else if (computerChoice == 'Rock') {
            result = 'computer';
        }
        else {
            result = 'draw';
        }
    }
    else {
        result = 'invalid';
    }
    if (result == 'player') {
        document.querySelector('#result-container').textContent = (`You win! ${playerChoice} beats ${computerChoice}.`);
        playerScore++;
    }
    else if (result == 'computer') {
        document.querySelector('#result-container').textContent = (`You loose. :c ${computerChoice} beats ${playerChoice}.`);
        computerScore++;
    }
    else if (result == 'draw') {
        document.querySelector('#result-container').textContent = ("It's a draw.");
    }
    if (playerScore === 5) {
        document.querySelector('#result-container').textContent = ("You won the game!");
        playerScore = 0;
        computerScore = 0;
    }
    if (computerScore === 5) {
        document.querySelector('#result-container').textContent = ("Computer won the game!");
        playerScore = 0;
        computerScore = 0;
    }

}