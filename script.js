//computerPlay decides computer's choice
function computerPlay() {
    let i = Math.floor(Math.random() * 3) //random integer <0,2>
    if (i === 0) {
        return 'Rock';
    }
    else if (i === 1) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}
//function simulating one round, displaying result and returning result value as a string
function playRound() {
    let playerChoice = prompt('Rock , Paper or Scissors?').toLowerCase();
    let playerChoiceCapitalized = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    let computerChoice = computerPlay();
    let result;
    if (playerChoice == 'rock') {
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
    else if (playerChoice == 'paper') {
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
    else if (playerChoice == 'scissors') {
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
        console.log(`You win! ${playerChoiceCapitalized} beats ${computerChoice}.`);
    }
    else if (result == 'computer') {
        console.log(`You loose. :c ${computerChoice} beats ${playerChoiceCapitalized}.`);
    }
    else if (result == 'draw') {
        console.log("It's a draw.");
    }
    else {
        console.log('ERROR:Invalid input    Type: rock, paper or scissors');

    }
    return result;
}
//function simulating BO5 game, displaying score and end result
function game() {
    let playerWinsCount = 0;
    let computerWinsCount = 0;
    while (playerWinsCount < 3 && computerWinsCount < 3) {
        result = playRound();
        if (result === 'player') {
            playerWinsCount++;
        }
        else if (result === 'computer') {
            computerWinsCount++;
        }
        console.log('Player:Computer', playerWinsCount+':'+computerWinsCount);
    }
    if (playerWinsCount == 3) {
        console.log('You win the game!!!');
    }
    else if (computerWinsCount == 3) {
        console.log('Computer wins the game :ccc');
    }

}
game()
