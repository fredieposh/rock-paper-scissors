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

function displayRoundResults(humanChoice, computerchoice) {
    document.querySelector("#userResult").textContent = `You chose ${humanChoice}`;
    document.querySelector("#computerResult").textContent = `The computer chose ${computerchoice}`;
}

function playRound(humanChoice, computerchoice) {
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    computerchoice = computerchoice.charAt(0).toUpperCase() + computerchoice.slice(1).toLowerCase();

    if (humanChoice === "Paper") {
        if (computerchoice === "Paper") {
            displayRoundResults(humanChoice, computerchoice);
            document.querySelector("#resultComment").textContent = `That's a tie. You both chose ${humanChoice}`;
            // console.log(`That's a tie. You both chose ${humanChoice}`);
            return;
        } else if (computerchoice === "Rock") {
            displayRoundResults(humanChoice, computerchoice);
            document.querySelector("#resultComment").textContent = `You win! ${humanChoice} beats ${computerchoice}`;
            // console.log(`You win! ${humanChoice} beats ${computerchoice}`);
            humanScore++;
            return;
        } else {
            displayRoundResults(humanChoice, computerchoice);
            document.querySelector("#resultComment").textContent = `You lose! ${computerchoice} beats ${humanChoice}`;
            // console.log(`You lose! ${computerchoice} beats ${humanChoice}`);
            computerScore++;
            return;
        }
    } else if ((humanChoice === "Rock")) {
        if (computerchoice === "Paper") {
            displayRoundResults(humanChoice, computerchoice);
            document.querySelector("#resultComment").textContent = `You lose! ${computerchoice} beats ${humanChoice}`;
            // console.log(`You lose! ${computerchoice} beats ${humanChoice}`);
            computerScore++;
            return;
        } else if (computerchoice === "Rock") {
            displayRoundResults(humanChoice, computerchoice);
            document.querySelector("#resultComment").textContent = `That's a tie. You both chose ${humanChoice}`;
            // console.log(`That's a tie. You both chose ${humanChoice}`);
            return;
        } else {
            displayRoundResults(humanChoice, computerchoice);
            document.querySelector("#resultComment").textContent = `You win! ${humanChoice} beats ${computerchoice}`;
            // console.log(`You win! ${humanChoice} beats ${computerchoice}`);
            humanScore++;
            return;
        }
    } else {
        if (computerchoice === "Paper") {
            displayRoundResults(humanChoice, computerchoice);
            document.querySelector("#resultComment").textContent = `You win! ${humanChoice} beats ${computerchoice}`;
            // console.log(`You win! ${humanChoice} beats ${computerchoice}`);
            humanScore++;
            return;
        } else if (computerchoice === "Rock") {
            displayRoundResults(humanChoice, computerchoice);
            document.querySelector("#resultComment").textContent = `You lose! ${computerchoice} beats ${humanChoice}`;
            // console.log(`You lose! ${computerchoice} beats ${humanChoice}`);
            computerScore++;
            return;
        } else {
            displayRoundResults(humanChoice, computerchoice);
            document.querySelector("#resultComment").textContent = `That's a tie. You both chose ${humanChoice}`;
            // console.log(`That's a tie. You both chose ${humanChoice}`);
            return;
        }
    }
}

function playGame(userChoice) {
    const humanSelection = userChoice;
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(`human: ${humanScore}\ncomputer: ${computerScore}`);
}

let humanScore = 0,
    computerScore = 0;
const humanScoreDisplay = document.querySelector("#UserScore");
const computerScoreDisplay = document.querySelector("#ComputerScore");

humanScoreDisplay.textContent = humanScore;
computerScoreDisplay.textContent = computerScore;

const choiceButtonsDiv = document.querySelector("#choiceButtons");

choiceButtonsDiv.addEventListener("click", (e) => {
    if (humanScore < 5 && computerScore < 5) {
        playGame(e.target.textContent);
        humanScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;
    }
    if(humanScore === 5) document.querySelector("#winner").textContent = "You are the winner!\nRefresh the page to start again.";
    if(computerScore === 5) document.querySelector("#winner").textContent = "The computer is the winner!\nRefresh the page to start again.";
});  

  

