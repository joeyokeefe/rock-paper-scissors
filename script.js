const choiceslist = ["rock", "paper", "scissors"];

console.log(choiceslist);

function getRandomInt(max) {
    return Math.floor(Math.random() * 3)
    }

function computerplay(randomchoice){
    const choiceNumber = getRandomInt(3);
    const computerSelection = choiceslist[choiceNumber];
    return computerSelection;
    }

const playerInput = prompt('rock, paper, or scissors?: ')

function playerchoice(option){
    let playerSelection = playerInput.toLowerCase();
    return playerSelection;
    }

function playRound(computerSelection, playerSelection){
    if (computerSelection === rock && playerSelection === paper){
        return 'Paper beats rock, you win!'
    }
    if (computerSelection === paper && playerSelection === scissors){
        return 'Scissors beats paper, you win!'
    }
    if (computerSelection === scissors && playerSelection === rock){
        return 'Rock beats scissors, you win!'
    }
    if (computerSelection === rock && playerSelection === scissors){
        return 'Rock beats scissors, you lose!'
    }
    if (computerSelection === paper && playerSelection === rock){
        return 'Paper beats rock, you lose!'
    }
    if (computerSelection === scissors && playerSelection === paper){
        return 'Scissors beats paper, you lose!'
    }
    if (computerSelection === rock && playerSelection === rock){
        return "It's a tie!"
    }
    if (computerSelection === paper && playerSelection === paper){
        return "It's a tie!"
    }
    if (computerSelection === scissors && playerSelection === scissors){
        return "It's a tie!"
    }
    else {
        return "Please choose rock, paper, or scissors"
    }
    console.log(playRound(computerSelection, playerSelection));
}
