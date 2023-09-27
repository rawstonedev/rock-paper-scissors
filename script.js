const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const roundResult = document.querySelector('.result');
const playerScores = document.querySelector('.your-scores');
const computerScores = document.querySelector('.computer-scores');
const round = document.querySelector('.round');
let roundNumber = 0;

rock.addEventListener ('click', () => {playRound('rock')});
paper.addEventListener ('click', () => {playRound('paper')});
scissors.addEventListener ('click', () => {playRound('scissors')});

function playRound (playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    let player = parseInt(playerScores.textContent);
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

    if (result.includes('Win!')) playerScores.textContent=parseInt(playerScores.textContent) + 1;
    if (result.includes('Lose!')) computerScores.textContent=parseInt(computerScores.textContent) + 1;
    roundNumber += 1;
    round.textContent = `Round ${roundNumber}`;
    return roundResult.textContent = result;
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