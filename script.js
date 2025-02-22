/* function return random number 0, 1 or 2. */
function getComputerChoice () {
    return Math.floor(Math.random() * 2)
}

const computerChoice = getComputerChoice ();

/* else if statement to get rock, paper, sciccors printed out. */

if (getComputerChoice === 0) {
    log("Rock");
} else if (getComputerChoice === 1) {
    log("Paper");
} else {
    log("Scissors");
}


console.log("I choose ${computerChoice}.");

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