/* function return random number 0, 1 or 2. */
function getComputerChoice () {
    return Math.floor(Math.random() * 3)
}

const computerRandomNumber = getComputerChoice ();

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