# rockpaperscissor Plan
A rock paper scissor game from TOP

# Write a function computerChoice()
that chooses between rock, paper and scissor

# Write a function that will play 1 round:
function playRound(playerSelection, computerSelection) {
    
    >> insert game logic here <<
}

const playerSelection = '';
Const computerSelection = computerChoice;

# Game Logic
// if playerSelection === rock

    computerSelection = rock;
    "It's a tie"
    computerSelection = paper;
    "Lost: Paper beats rock"
    computerSelection = scissor;
    "Win: Rock beats scissor"

// if playerSelection === paper

    computerSelection = rock;
    "Win: Paper beats rock"
    computerSelection = paper;
    "It's a tie"
    computerSelection = scissor;
    "Lost: Scissor cuts paper"

// if playerSelection === scissor

    computerSelection = rock;
    "Lost: Rock breaks scissor"
    computerSelection = paper;
    "Win: Scissor cuts paper"
    computerSelection = scissor;
    "It's a tie"

# call playROund(playerSelection, computerSelection)