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
const gameMessage_div = document.querySelector('game-message')

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
    let playerScore = playerScore_p.value;
    playerScore ++;
}

// adds 1 to computer score
function changeComputerScore(){
    let computerScore = playerScore_p.value;
    computerScore ++;
}

//single round code
function playRound(playerPick){
    let computerPick = computerplay();
    if (computerPick === 'rock' && playerPick === 'paper'){
        changePlayerScore();
        return 'Paper beats rock, you win!';
    }
    else if (computerPick === 'paper' && playerPick === 'scissors'){
        changePlayerScore();
        return 'Scissors beats paper, you win!';
    }
    else if (computerPick === 'scissors' && playerPick === 'rock'){
        changePlayerScore();
        return 'Rock beats scissors, you win!';
    }
    else if (computerPick === 'rock' && playerPick === 'scissors'){
        changeComputerScore();
        return 'Rock beats scissors, you lose!';
    }
    else if (computerPick === 'paper' && playerPick === 'rock'){
        changeComputerScore();
        return 'Paper beats rock, you lose!';
    }
    else if (computerPick === 'scissors' && playerPick === 'paper'){
        changeComputerScore();
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

//creating user choice through UI
function buttonChoices() {
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

buttonChoices();

//repeating rounds until one player reaches 5 points
function game(){
    if (computerScore < 5 && playerScore < 5) {
        do{
           // var playerInput =
            console.log('Computer Score:' + computerScore)
            console.log('Player Score:' + playerScore)
            }while(computerScore < 5 && playerScore < 5) 
        }
    if (computerScore === 5){
        console.log("Oh no, you lost the game!")
    }
    if (playerScore === 5){
        console.log("Great job, you won the game!")
    }
}



//game();



