# Plan
A rock paper scissor game from TOP

## Step 1: Write a function computerChoice()
It will choose between rock, paper and scissor

## Step 2: Write a function that will play 1 round
function playRound(playerSelection, computerSelection) {

    >> insert game logic here <<

}

## Step 3: Create the variables after playRound()
const playerSelection = '';
Const computerSelection = computerChoice;

###### The game logics
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

## Step 4: Call playRound(playerSelection, computerSelection)