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
    switch (true) {
        case((playerChoice == 'Rock' && computerChoice == 'Scissors') || (playerChoice == 'Paper' && computerChoice == 'Rock') || (playerChoice == 'Scissors' && computerChoice == 'Paper')):
        result = 'player';
        break;
        case((playerChoice == 'Rock' && computerChoice == 'Paper') || (playerChoice == 'Paper' && computerChoice == 'Scissors') || (playerChoice == 'Scissors' && computerChoice == 'Rock')):
        result = 'computer';
        break;
        default:
            result = 'draw';
    }
    
    switch (result){
    case "player":
        document.querySelector('#result-container').textContent = (`You win! ${playerChoice} beats ${computerChoice}.`);
        playerScore++;
        break;
    case "computer":
        document.querySelector('#result-container').textContent = (`You lose. :c ${computerChoice} beats ${playerChoice}.`);
        computerScore++;
        break;
    default:
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