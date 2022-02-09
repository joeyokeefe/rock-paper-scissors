//defining variables
const choiceslist = ["rock", "paper", "scissors"];
var computerScore = 0;
var playerScore = 0;
const playerButtons = document.querySelectorAll('button');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const playerScore_p = document.getElementById('player-score-number')
const computerScore_p = document.getElementById('computer-score-number')
const gameMessage_div = document.getElementById('game-message-text')

//automating computer choice
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
    };

function computerplay(){
    const choiceNumber = getRandomInt(3);
    return choiceslist[choiceNumber];
    };

// adds 1 to player score
function changePlayerScore(){
    playerScore ++;
    playerScore_p.innerHTML = playerScore;
}

// adds 1 to computer score
function changeComputerScore(){
    computerScore ++;
    computerScore_p.innerHTML = computerScore;
}

//single round code
function playRound(playerPick){
    let computerPick = computerplay();
    if (computerScore < 5 && playerScore < 5){
    if (computerPick === 'rock' && playerPick === 'paper'){
        changePlayerScore();
        gameMessage_div.innerHTML = 'Paper beats rock, you win!';
    }
    else if (computerPick === 'paper' && playerPick === 'scissors'){
        changePlayerScore();
        gameMessage_div.innerHTML = 'Scissors beats paper, you win!';
    }
    else if (computerPick === 'scissors' && playerPick === 'rock'){
        changePlayerScore();
        gameMessage_div.innerHTML = 'Rock beats scissors, you win!';
    }
    else if (computerPick === 'rock' && playerPick === 'scissors'){
        changeComputerScore();
        gameMessage_div.innerHTML = 'Rock beats scissors, you lose!';
    }
    else if (computerPick === 'paper' && playerPick === 'rock'){
        changeComputerScore();
        gameMessage_div.innerHTML = 'Paper beats rock, you lose!';
    }
    else if (computerPick === 'scissors' && playerPick === 'paper'){
        changeComputerScore();
        gameMessage_div.innerHTML = 'Scissors beats paper, you lose!';
    }
    else if (computerPick === 'rock' && playerPick === 'rock'){
        gameMessage_div.innerHTML = "It's a tie!"
    }
    else if (computerPick === 'paper' && playerPick === 'paper'){
        gameMessage_div.innerHTML = "It's a tie!"
    }
    else if (computerPick === 'scissors' && playerPick === 'scissors'){
        gameMessage_div.innerHTML = "It's a tie!"
    }
    }
    else if (playerScore === 5){
        gameMessage_div.innerHTML = "Great job, you won the game!"
        return gameover;
    }
    else if (computerScore === 5){
        gameMessage_div.innerHTML = "Game over, you lose!"
        return gameover;
    }
};

//creating user choice through UI
function game() {
    rockBtn.addEventListener('click', function(){
        playRound('rock')
    });

    paperBtn.addEventListener('click', function(){
        playRound('paper')
    });

    scissorsBtn.addEventListener('click', function(){
        playRound('scissors')
    });
} 

game();

//repeating rounds until one player reaches 5 points
