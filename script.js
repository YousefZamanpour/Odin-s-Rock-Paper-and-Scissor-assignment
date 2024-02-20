/*
Create playerScore / computerScore Variables with an empty value
Declare playerSelection; , computerSelection;
Make a list of options for computer to choose from
Create a function called getComputerChoice that generate a random number and assign it to the index of list from the list
Create a function playRound and pass playerSelection and computerSelection as a parameters - and go through the possible outcomes to decide who's the winner.
inside the playRound function update the Scores appropriate to the outcomes
Finally Create a function called playGame and it runs the playRound function until on of the sides reaches to 3
*/

let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";
const list = ["rock", "paper", "scissor"];

// A Function that return a random value from the list
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return list[choice];
}

// A Function that determines the winner of each round
function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Rock Paper Scissor : ").toLocaleLowerCase();
  computerSelection = getComputerChoice();
  if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    return `Player Chose ${playerSelection} and Computer Chose ${computerSelection} So Player Beats Computer! Player Score is ${(playerScore =
      playerScore + 1)}`;
  } else if (playerSelection === computerSelection) {
    return `Player Chose ${playerSelection} and Computer Chose ${computerSelection} So It's A Draw `;
  } else {
    return `Player Chose ${playerSelection} and Computer Chose ${computerSelection} So Computer Beats Player. Computer Score is ${(computerScore =
      computerScore + 1)}`;
  }
}

// A Function that keeps running the above function till player score or computer score reaches 3
function playGame() {
  while (playerScore < 3 && computerScore < 3) {
    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore === 3) {
    console.log("Player Wins");
  } else if (computerScore === 3) {
    console.log("Computer Wins");
  }
}

playGame();
