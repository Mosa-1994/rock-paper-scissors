/* Computer input */
let humanScore = 0;
let computerScore = 0;

for (let game = 0; game < 5; game++) {
function getComputerChoice() {
    let computerRandomNumber = Math.floor(Math.random() * 3);
    return computerRandomNumber;
}

let computerRandomNumber = getComputerChoice();
console.log(computerRandomNumber);

function computerInput() {
    let computerChoice = '';
    if (computerRandomNumber === 0) {
        computerChoice = "Rock";
    } else if (computerRandomNumber === 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice
}

let computerChoice = computerInput();
console.log(`I choose ${computerChoice}.`);

/* Human input */

function humanInput() {
    let humanChoice = prompt("Make your choice", "Rock, Paper or Scissors?");
    return humanChoice;
}

let humanChoice = humanInput();
console.log(`You choose ${humanChoice}.`);

/* PlayRound functie */

function playRound(humanChoice, computerChoice) {
    if (computerChoice === "Rock" && humanChoice === "Paper") {
        humanScore++;
        console.log(`Congrats you've won!`);
     } else if (computerChoice === "Paper" && humanChoice === "Scissors") {
        humanScore++;
        console.log(`Congrats you've won!`);
     } else if (computerChoice === "Scissors" && humanChoice === "Rock") {
        humanScore++;
        console.log(`Congrats you've won!`);
     } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
         computerScore++;
         console.log(`Mwhuahaha I win, you lose!`);
     } else if (computerChoice === "Paper" && humanChoice === "Rock") {
        computerScore++;
        console.log(`Mwhuahaha I win, you lose!`);
     } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        computerScore++;
        console.log(`Mwhuahaha I win, you lose!`);
     } else if (computerChoice === humanChoice) {
        console.log(`It's a tie... Let's try again.`);
     } else {
        console.log(`Oops... something went wrong. Let's try again.`)
     }
}

/* Output 1 round */
playRound(humanChoice, computerChoice);
console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
}

console.log(`We've played 5 games. You've won ${humanScore} times. I won ${computerScore} times.`)