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

rockBtn.addEventListener('click', function(){
    console.log('hey!')
})

//automating computer choice
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
    };

function computerplay(){
    const choiceNumber = getRandomInt(3);
    return choiceslist[choiceNumber];
    };

//single round code
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

//repeating rounds until one player reaches 5 points
function game(){
    if (computerScore < 5 && playerScore < 5) {
        do{
           // var playerInput = buttonChoice(playerButtons)
            console.log(playRound(playerInput))
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

game ();

// UI settings

