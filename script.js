function getComputerChoice() {
    choice = Math.floor(Math.random() * 10) - 1
    if (choice < 3) {
        return "rock";
    } else if (choice < 6) {
        return "paper";
    } else {
        return "scissors";
    };
}

function getUserChoice() {
    return prompt("Enter Your Move");
}

function playRound(humanChoice, computerchoice) {
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    computerchoice = computerchoice.charAt(0).toUpperCase() + computerchoice.slice(1).toLowerCase();

    if (humanChoice === "Paper") {
        if (computerchoice === "Paper") {
            console.log(`That's a tie. You both chose ${humanChoice}`);
            return;
        } else if (computerchoice === "Rock") {
            console.log(`You win! ${humanChoice} beats ${computerchoice}`);
            humanScore++;
            return;
        } else {
            console.log(`You lose! ${computerchoice} beats ${humanChoice}`);
            computerScore++;
            return;
        }
    } else if ((humanChoice === "Rock")) {
        if (computerchoice === "Paper") {
            console.log(`You lose! ${computerchoice} beats ${humanChoice}`);
            computerScore++;
            return;
        } else if (computerchoice === "Rock") {
            console.log(`That's a tie. You both chose ${humanChoice}`);
            return;
        } else {
            console.log(`You win! ${humanChoice} beats ${computerchoice}`);
            humanScore++;
            return;
        }
    } else {
        if (computerchoice === "Paper") {
            console.log(`You win! ${humanChoice} beats ${computerchoice}`);
            humanScore++;
            return;
        } else if (computerchoice === "Rock") {
            console.log(`You lose! ${computerchoice} beats ${humanChoice}`);
            computerScore++;
            return;
        } else {
            console.log(`That's a tie. You both chose ${humanChoice}`);
            return;
        }
    }
}

function playGame() {
    const humanSelection = getUserChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(`human: ${humanScore}\ncomputer: ${computerScore}`);
}

let humanScore = 0,
    computerScore = 0;

for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}:`)
    playGame();
}
