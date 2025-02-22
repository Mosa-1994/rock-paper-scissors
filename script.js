/* function returns random number 0, 1 or 2. */
const computerRandomNumber = function getComputerChoice () {
    return Math.floor(Math.random() * 3)
}

console.log(computerRandomNumber);

/* else if statement to get rock, paper, sciccors printed out. */

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
function getHumanChoice () {
    const humanInput = prompt("Make your choice.");
    return humanInput.toLowerCase;
}

let humanChoice = getHumanChoice ();

console.log(humanChoice);

/* Player wins if: 
computer  |  Player
---------------------
Rock      |  Paper
Paper     |  Sciccors
Sciccors  |  Rock

Computer wins if
Computer  |  Player
-------------------
Rock      |  Sciccors
Paper     |  Rock
Sciccors  |  Paper
*/


let playerWins = '';
let computerWins = '';
let tie = '';
if (humanChoice === "Paper" && computerChoice === "Rock") {
   playerWins 
} else if (humanChoice === "Sciccors" && computerChoice === "Paper") {
    playerWins
} else if (humanChoice === "Rock" && computerChoice === "Sciccors") {
    playerWins
} else if (computerChoice === "Rock" && humanChoice === "Sciccors") {
    computerWins
} else if (computerChoice === "Paper" && humanChoice === "Rock") {
    computerWins
} else if (computerChoice === "Sciccors" && humanChoice === "Paper") {
    tie
} else {
    console.log('Oops... that went wrong.')
}


if (playerWins) {
    console.log(`3... 2... 1... ${computerChoice.toUpperCase}! Congrats you've won!`)
} else if (computerWins) {
    console.log(`3... 2... 1... ${computerChoice.toUpperCase}! Mwhuahaha I win, you lose!`)
} else if (tie) {
    console.log(`It's a tie... Let's try again.`)
}

/* 
if 0 log rock;
if 1 log paper;
if 2 log scissors;

/* 
Creating a game of rock, paper, scissors.
Computer randomly reacts with rock, paper or scissors.
Asign rock, paper and scissors to numbers 0, 1 and 2.
Player writes their choice.
*/