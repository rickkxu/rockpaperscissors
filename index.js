let computerChoice;
let playerTally = 0;
let computerTally = 0;

const resultDiv = document.querySelector('#results');
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.onclick = () => playRound("rock", getComputerChoice());
paperBtn.onclick = () => playRound("paper", getComputerChoice());
scissorsBtn.onclick = () => playRound("scissors", getComputerChoice());

const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const resetBtn = document.querySelector('#reset');

resultDiv.textContent = "Select an Item";
playerScore.textContent = playerTally;
computerScore.textContent = computerTally;

resetBtn.onclick = () => {
    playerTally = 0;
    computerTally = 0;
    playerScore.textContent = playerTally;
    computerScore.textContent = computerTally;
}

function getComputerChoice (){
    let randNum = Math.floor(Math.random()*3);
    if (randNum == 0){
        computerChoice = "Rock";
    } else if (randNum == 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function playRound (playerSelection, computerSelection){
    playerSelection = playerSelection.slice(0,1).toUpperCase()+playerSelection.slice(1).toLowerCase();
    if (playerSelection == "Rock"){
        if (computerSelection == "Rock"){
            resultDiv.textContent = `Draw! Rock equals Rock`;
        } else if (computerSelection == "Paper"){
            computerTally++;
            resultDiv.textContent = `You Lose! Paper beats Rock`;
        } else {
            playerTally++;
            resultDiv.textContent = `You Win! Rock beats Scissors`;
        }
    } else if (playerSelection == "Paper"){
        if (computerSelection == "Rock"){
            playerTally++;
            resultDiv.textContent = `You Win! Paper beats Rock`;
        } else if (computerSelection == "Paper"){
            resultDiv.textContent = `Draw! Paper equals Paper`;
        } else {
            computerTally++;
            resultDiv.textContent = `You Lose! Scissors beats Rock`;
        }
    } else {
        if (computerSelection == "Rock"){
            computerTally++;
            resultDiv.textContent = `You Lose! Rock beats Scissors`;
        } else if (computerSelection == "Paper"){
            playerTally++;
            resultDiv.textContent = `You Win! Scissors beats Paper`;
        } else {
            resultDiv.textContent = `Draw! Scissors equals Scissors`;
        }
    }
    playerScore.textContent = playerTally;
    computerScore.textContent = computerTally;
    if (playerTally == 5){
        resultDiv.textContent = "You Win the Game!";
        playerTally = 0;
        computerTally = 0;
    } else if (computerTally == 5){
        resultDiv.textContent = "Computer Wins the Game!";
        playerTally = 0;
        computerTally = 0;
    }
}
