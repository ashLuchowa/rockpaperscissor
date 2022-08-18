let playerScore = 0;
let computerScore = 0;

function game() {

    // computer chooses between rock, paper or scissor
    const getComputerChoice = () => {
        const arrOfChoices = ['rock', 'paper', 'scissor']
        const compChoice = arrOfChoices[Math.floor(Math.random() * 3)]
        return compChoice;
    }

    // playing 1 round
    const playRound = (playerSelection, computerSelection) => {

        // It's a tie
        if (playerSelection === computerSelection) {
            return 'It\'s a tie'
        }

        // Player win
        if ((playerSelection === 'rock' && computerSelection === 'scissor') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissor' && computerSelection === 'paper')) {
            playerScore++;
            return 'You win this round!'
        }

        // Computer Win
        if ((playerSelection === 'rock' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection === 'scissor') ||
            (playerSelection === 'scissor' && computerSelection === 'rock')) {
            computerScore++;
            return 'You lost this round!'
        }
    }

    const playerSelection = prompt('Choose between rock, paper and scissor', 'rock').toLowerCase();
    const computerSelection = getComputerChoice();

    console.log(`Player: ${playerScore} || Computer: ${computerScore}`)
    console.log(`You chose ${playerSelection} || Computer chose ${computerSelection}`)
    console.log(playRound(playerSelection, computerSelection))

}

for (let i = 0; i < 5; i++) {
    game();
}

if (playerScore > computerScore) {
    console.log(`Player: ${playerScore} || Computer: ${computerScore}`)
    console.log('You won the game!')
} else if (playerScore < computerScore) {
    console.log(`Player: ${playerScore} || Computer: ${computerScore}`)
    console.log('You lost the game!')
} else {
    console.log(`Player: ${playerScore} || Computer: ${computerScore}`)
    console.log('It\'s a tie!')
}