const choiceslist = ["rock", "paper", "scissors"];
var computerScore = 0;
var playerScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
    };

function computerplay(){
    const choiceNumber = getRandomInt(3);
    return choiceslist[choiceNumber];
    };

const playerInput = prompt('rock, paper, or scissors?: ').toLowerCase();

function playRound(playerPick){
    let computerPick = computerplay();
    if (computerPick === 'rock' && playerPick === 'paper'){
        playerScore ++;
        return 'Paper beats rock, you win!';
    }
    else if (computerPick === 'paper' && playerPick === 'scissors'){
        playerScore ++;
        return 'Scissors beats paper, you win!';
    }
    else if (computerPick === 'scissors' && playerPick === 'rock'){
        playerScore ++;
        return 'Rock beats scissors, you win!';
    }
    else if (computerPick === 'rock' && playerPick === 'scissors'){
        computerScore++;
        return 'Rock beats scissors, you lose!';
    }
    else if (computerPick === 'paper' && playerPick === 'rock'){
        computerScore++;
        return 'Paper beats rock, you lose!';
    }
    else if (computerPick === 'scissors' && playerPick === 'paper'){
        computerScore ++;
        return 'Scissors beats paper, you lose!';
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


function game(){
    do{
        console.log(playRound(playerInput))
        console.log('Computer Score:' + computerScore)
        console.log('Player Score:' + playerScore)
        }while(computerScore < 5, playerScore < 5)
    }
    if (computerScore === 5){
        return "Oh no! You lose!"
    }
    if (playerScore === 5){
        return "Great job! You win!"
    }

game ();