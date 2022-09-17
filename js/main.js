let pScore = 0;
let cScore = 0;

//Button variables
const chooseRock = document.getElementById('chooseRock');
const choosePaper = document.getElementById('choosePaper');
const chooseScissor = document.getElementById('chooseScissor');
const outcomeDiv = document.querySelector('.outcome');

// computer chooses between rock, paper or scissor
const getComputerChoice = () => {
    const arrOfChoices = ['rock', 'paper', 'scissor']
    const compChoice = arrOfChoices[Math.floor(Math.random() * 3)]
    return compChoice;
}


//Click on rock button Event
chooseRock.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
})

choosePaper.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
})

chooseScissor.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissor';
    playRound(playerSelection, computerSelection);
})


// playing 1 round
const playRound = (playerSelection, computerSelection) => {

    // It's a tie
    if (playerSelection === computerSelection) {
        const p = document.createElement('p');
        p.innerText = 'It\'s a tie';
        outcomeDiv.appendChild(p);
    }

    // Player win
    if ((playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')) {
        const p = document.createElement('p');
        p.innerText = 'You win this round!';
        outcomeDiv.appendChild(p);
        pScore++;
        updateScore();

    }

    // Computer Win
    if ((playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissor') ||
        (playerSelection === 'scissor' && computerSelection === 'rock')) {
        const p = document.createElement('p');
        p.innerText = 'You lost this round!';
        outcomeDiv.appendChild(p);
        cScore++;
        updateScore();
    }

    // Win condition
    if (pScore == 5) {
        alert('You won');
    } else if (cScore == 5) {
        alert(`You lost the game`);
    }
}

// Update Scores
const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.innerText = pScore;
    computerScore.textContent = cScore;
}