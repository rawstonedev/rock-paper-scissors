function playRound (playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    let result;
    if (playerSelection == 'Rock' && computerSelection == 'Scissors'
        || playerSelection == 'Paper' && computerSelection == 'Rock'
        || playerSelection == 'Scissors' && computerSelection == 'paper') {
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper'
               || playerSelection == 'Paper' && computerSelection == 'Scissors'
               || playerSelection == 'Scissors' && computerSelection == 'Rock') {
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        result = 'Draw!';
    }
    return result;
}

function getComputerChoice () {
    let options = ['Rock','Paper','Scissors'];
    let choice = Math.floor(Math.random()*3);
    return options[choice];
}