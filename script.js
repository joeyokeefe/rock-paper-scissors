const choiceslist = ["rock", "paper", "scissors"];

function getRandomInt(max) {
    return Math.floor(Math.random() * 3)
    };

function computerplay(){
    const choiceNumber = getRandomInt(3);
    return choiceslist[choiceNumber];
    };

const playerInput = prompt('rock, paper, or scissors?: ').toLowerCase();

function playRound(playerPick){
    let computerPick = computerplay();
    if (computerPick === 'rock' && playerPick === 'paper'){
        return 'Paper beats rock, you win!'
    }
    else if (computerPick === 'paper' && playerPick === 'scissors'){
        return 'Scissors beats paper, you win!'
    }
    else if (computerPick === 'scissors' && playerPick === 'rock'){
        return 'Rock beats scissors, you win!'
    }
    else if (computerPick === 'rock' && playerPick === 'scissors'){
        return 'Rock beats scissors, you lose!'
    }
    else if (computerPick === 'paper' && playerPick === 'rock'){
        return 'Paper beats rock, you lose!'
    }
    else if (computerPick === 'scissors' && playerPick === 'paper'){
        return 'Scissors beats paper, you lose!'
    }
    else if (computerPick === 'rock' && playerPick === 'rock'){
        return "It's a tie!"
    }
    else if (computerPick === 'paper' && playerPick === 'paper'){
        return "It's a tie!"
    }
    else if (computerPick === 'scissors' && playerPick === 'scissors'){
        return "It's a tie!"
    }
    else {
        return "Please choose rock, paper, or scissors"
    }
};

console.log(playRound(playerInput))


