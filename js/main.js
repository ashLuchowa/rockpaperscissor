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

        // player's choice = rock
        if (playerSelection === 'rock') {
            if (computerSelection === 'scissor') {
                playerScore++;
                return 'You win!'
            } else if (computerSelection === 'paper') {
                computerScore++;
                return 'You lose!'
            } else {
                return 'It\'s a tie!'
            }
        }

        // player's choice = paper
        else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                return 'You win!'
            } else if (computerSelection === 'scissor') {
                return 'You lose!'
            } else {
                return 'It\'s a tie!'
            }
        }

        // player's choice = scissor
        else {
            if (computerSelection === 'rock') {
                return 'You lose!'
            } else if (computerSelection === 'paper') {
                return 'You win!'
            } else {
                return 'It\'s a tie!'
            }
        }
    }

    const playerSelection = prompt('Choose between rock, paper and scissor', 'rock')
    const computerSelection = getComputerChoice();

    console.log(`Player: ${playerScore} | computerScore: ${computerScore}`)
    console.log(`Player: ${playerSelection}`)
    console.log(`Computer: ${computerSelection}`)
    console.log(playRound(playerSelection, computerSelection))

}

for (let i = 0; i < 5; i++) {
    game();
};