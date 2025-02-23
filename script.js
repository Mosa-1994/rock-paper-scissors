/* 
if 0 log rock;
if 1 log paper;
if 2 log scissors;
*/

/* function returns random number 0, 1 or 2. */
function getComputerChoice () {
    return Math.floor(Math.random() * 3)
}

const computerRandomNumber = getComputerChoice ();

console.log(computerRandomNumber);

/* else if statement to get rock, paper, scissors printed out. */

let computerChoice = '';

if (computerRandomNumber === 0) {
    computerChoice = "Rock";
} else if (computerRandomNumber === 1) {
    computerChoice = "Paper";
} else {
    computerChoice = "Scissors";
}

console.log(`I choose ${computerChoice}.`);

/* Players side of the game */
let humanChoice = prompt("Make your choice", "Rock, Paper or Scissors.")

console.log(`You choose ${humanChoice}.`);

/* Player wins if: 
computer  |  Player
---------------------
Rock      |  Paper
Paper     |  Scissors
Scissors  |  Rock

Computer wins if
Computer  |  Player
-------------------
Rock      |  Scissors
Paper     |  Rock
Scissors  |  Paper
*/

let playerWins;
let computerWins = (playerWins === false);
let tie;
if (computerChoice === "Rock" && humanChoice === "Paper") {
   playerWins = true;
} else if (computerChoice === "Paper" && humanChoice === "Scissors") {
    playerWins = true;
} else if (computerChoice === "Scissors" && humanChoice === "Rock") {
    playerWins = true;
} else if (computerChoice === "Rock" && humanChoice === "Scissors") {
    playerWins = false;
} else if (computerChoice === "Paper" && humanChoice === "Rock") {
    playerWins = false;
} else if (computerChoice === "Scissors" && humanChoice === "Paper") {
    playerWins = false;
} else if (computerChoice === humanChoice) {
    tie = true
} else {
    tie = false
}

/* Final outcome */

if (playerWins === true) {
    console.log(`Congrats you've won!`)
} else if (playerWins === false) {
    console.log(`Mwhuahaha I win, you lose!`)
} else if (tie === true) {
    console.log(`It's a tie... Let's try again.`)
} else {
    console.log(`Oops... something went wrong. Let's try again.`)
}

/* Tracking the score.
If playerWins === true, than playerWins +1.
If playerWins === false, than computerWins +1.
If tie === true, nothing happens.
*/

const humanScore = playerWins++;
const computerScore = computerWins++;

console.log(humanScore + " vs " + computerScore);