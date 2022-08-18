function getComputerChoice(gameChoice) {
    return gameChoice[Math.floor(Math.random() * gameChoice.length)];
}

console.log(getComputerChoice(['rock', 'paper', 'scissor']));