const move = ["rock", "paper", "scissors"];

function computerPlay() {
  return move[Math.floor(Math.random() * move.length)];
}

function playround() {
  const playerSelection = prompt("enter");
  const computerSelection = computerPlay();

  if (playerSelection === "rock" && computerSelection === "scissors")
    return "You win! Rock beats scissors";
  else if (playerSelection === "rock" && computerSelection === "paper")
    return "You lose! Paper beats rock";
  else if (playerSelection === "rock" && computerSelection === "rock")
    return "Tie game!";

  if (playerSelection === "paper" && computerSelection === "rock")
    return "You win! Paper beats rock";
  else if (playerSelection === "paper" && computerSelection === "scissors")
    return "You lose! Scissors beats paper";
  else if (playerSelection === "paper" && computerSelection === "paper")
    return "Tie game!";

  if (playerSelection === "scissors" && computerSelection === "paper")
    return "You win! Scissors beats paper";
  else if (playerSelection === "scissors" && computerSelection === "rock")
    return "You lose! Rock beats scissors";
  else if (playerSelection === "scissors" && computerSelection === "scissors")
    return "Tie game!";
}

function game() {
  console.log(playround());
  console.log(playround());
  console.log(playround());
  console.log(playround());
  console.log(playround());
}

console.log(game());
