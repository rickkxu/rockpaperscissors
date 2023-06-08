let computerChoice;
let playerTally = 0;
let computerTally = 0;

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
            return "Draw! Rock equals Rock";
        } else if (computerSelection == "Paper"){
            computerTally++;
            return "You Lose! Paper beats Rock";
        } else {
            playerTally++;
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection == "Paper"){
        if (computerSelection == "Rock"){
            playerTally++;
            return "You Win! Paper beats Rock";
        } else if (computerSelection == "Paper"){
            return "Draw! Paper equals Paper";
        } else {
            computerTally++;
            return "You Lose! Scissors beats Rock";
        }
    } else {
        if (computerSelection == "Rock"){
            computerTally++;
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection == "Paper"){
            playerTally++;
            return "You Win! Scissors beats Paper";
        } else {
            return "Draw! Scissors equals Scissors";
        }
    }
}

function game () {
    for (let roundNum=1; roundNum<6; roundNum++){
        console.log(playRound(prompt("Enter a choice: "), getComputerChoice()));
    }
    console.log(playerTally);
    console.log(computerTally);
    if (playerTally > computerTally){
        return "You Win the Game!";
    } else if (playerTally < computerTally){
        return "You Lose the Game.";
    } else {
        return "Draw Game.";
    }
}

console.log(game());