

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

// function to play 5 round at once :
// function game(playerSelection) {
    
//     let playerScores = 0;
//     let computerScores = 0;
//     for (let n = 1; n <= 5; n++) {
//         let result = playRound(playerSelection);
//         console.log (result);
//         if (result.includes('Win!')) {playerScores += 1}
//         if (result.includes('Lose!')) {computerScores += 1}
//     }
    
//     let result;
//     if (playerScores > computerScores) {
//         result = `You are the WINNER!`
//     } else if (computerScores > playerScores) {
//         result = 'Computer is the winner!'
//     } else {
//         result = 'Draw'
//     }

//     console.log(`Final scores ${playerScores} : ${computerScores}`)
//     return result;
// }