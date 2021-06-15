
let playerWins = 0;
let computerWins = 0;

body = document.body;
const container = document.getElementById("container");
const results = document.getElementById('results');
const choices = document.getElementById('choices');

container.appendChild(choices);
container.appendChild(results);

// Create reference to button elements
const button1 = document.getElementById("rock");
const button2 = document.getElementById("paper");
const button3 = document.getElementById("scissors");
const rstButton = document.getElementById("resetButton");

// Attach listener buttons
button1.addEventListener('click', function(){ playRound("Rock", computerPlay());});
button2.addEventListener('click', function(){ playRound("Paper", computerPlay());});
button3.addEventListener('click', function(){ playRound("Scissors", computerPlay());});
rstButton.addEventListener('click', resetGame);


// Function to choose the computer's choice for the round
function computerPlay() {
    let computerChoice;

    computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice == 0) {
        console.log("Computer choice = rock");
        return "Rock";
    }
    else if (computerChoice == 1) {
        console.log("Computer choice = paper");
        return "Paper";
    }
    else if (computerChoice == 2) {
        console.log("Computer choice = scissors");
        return "Scissors";
    }

} // End Function


// Function to play a round of the game
function playRound(playerSelection, computerSelection){


    // Decision tree if player chooses rock
    trackChoices(playerSelection, computerSelection)

    if (playerSelection == "Rock" && computerSelection == "Rock") {
        keepScore(1, 1);
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        keepScore(0, 1);
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        keepScore(1, 0);
    }
    // Decision tree if player chooses paper
    else if (playerSelection == "Paper" && computerSelection == "Paper") {
        keepScore(1, 1);
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        keepScore(0, 1);
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        keepScore(1, 0);
    }
    // Decision tree if player chooses scissors
    else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        keepScore(1, 1);
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        keepScore(0, 1);
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        keepScore(1, 0);
    }
}


// Function to keep score
function keepScore(computer, player) {

    playerWins += player;
    computerWins += computer;
    results.innerText = "Player Wins: " + playerWins + "\n" + "Computer Wins: " + computerWins;

    if (playerWins == 5 || computerWins == 5) {
        newGame();
    }

} // End Function


// Function to keep track of player and computer choices and display on screen
function trackChoices(playerChoice, computerChoice) {

    choices.innerText = "Player Choice: " + playerChoice + "\n" + "Computer Choice: " + computerChoice;
} // End function

// Resets the board after 5 wins are accumulated
function newGame() {

    if (playerWins > computerWins) {
        choices.innerText = "Player Wins!"
    }
    else if (computerWins > playerWins) {
        choices.innerText = "Computer Wins!"
    }
    else {
        choices.innerText = "Tie Game!"
    }

    playerWins = 0;
    computerWins = 0;

} // End function


// Function to reset game board before match ends
function resetGame() {

    results.innerText = "Scoreboard.";
    choices.innerText = "Players."
    playerWins = 0;
    computerWins = 0;

} // End function

//Set initial gameboard
keepScore(0, 0)

//Set initial player choices
trackChoices("", "");


