// Function to choose the computer's choice for the round
function computerPlay() {
    let computerChoice;
    
    computerChoice = Math.floor(Math.random()*3);

    console.log("Computer choice = " + computerChoice);

    if(computerChoice == 0) {
        return "rock";
    }
    else if (computerChoice == 1) {
        return "paper";
    }
    else if (computerChoice == 2) {
        return "scissors"
    }
    
  }
  
// Function to play a single round of the game
function playRound(playerSelection, computerSelection){
   
    // Decision tree if player chooses rock
    if(playerSelection == "rock" && computerSelection == "rock"){
        playerWins += 1;
        computerWins += 1;
        return "Tie round!!!";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerWins += 1;
        return "You win! Rock beats scissors."
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        computerWins += 1;
        return "You lose! Paper beats rock!"
    }
    
    // Decision tree if player chooses paper
    if(playerSelection == "paper" && computerSelection == "paper"){
        playerWins += 1;
        computerWins += 1;
        return "Tie round!!!";
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        playerWins += 1;
        return "You win! Paper beats rock!!!"
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerWins += 1;
        return "You lose! Scissors beats paper!!!"
    }
    
    // Decision tree if player chooses scissors
    if(playerSelection == "scissors" && computerSelection == "scissors"){
        playerWins += 1;
        computerWins += 1;
        return "Tie round!!!";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerWins += 1;
        return "You win! Scissors beat paper!!!"
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerWins += 1;
        return "You lose! Rock beats scissors!!!"
    }
}

// function plays the game
function game(){
    
    for (let i = 0; i < 5; i++){
        playerSelection = window.prompt("Rock, paper, or scissors?");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        }
}   

let playerWins = 0;
let computerWins = 0;

game();

if(playerWins > computerWins) {
    console.log("You win the game!");
}
else if(playerWins < computerWins) {
    console.log("You lost the game!");
}
else (
    console.log("Tie Game, yo!!!")
)
