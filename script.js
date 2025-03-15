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
    computerchoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

    if (humanChoice === "Paper") {
        if (computerchoice === "Paper") {
            console.log(`That's a tie. You both chose ${humanChoice}`);
        } else if (computerchoice === "Rock") {
            console.log(`You win! ${humanChoice} beats ${computerchoice}`);
            humanScore ++ ;
            return ;
        } else {
            console.log(`You lose! ${computerchoice} beats ${humanChoice}`);
            computerScore ++;
            return ;
        }
    } else if ((humanChoice === "Rock")) {
        if (computerchoice === "Paper") {
            console.log(`You lose! ${computerchoice} beats ${humanChoice}`);
            computerScore ++;
            return ;
        } else if (computerchoice === "Rock") {
            console.log(`That's a tie. You both chose ${humanChoice}`);
        } else {
            console.log(`You win! ${humanChoice} beats ${computerchoice}`);
            humanScore ++ ;
            return ;
        }
    } else {
        if (computerchoice === "Paper") {
            console.log(`You win! ${humanChoice} beats ${computerchoice}`);
            humanScore ++ ;
            return ;
        } else if (computerchoice === "Rock") {
            console.log(`You lose! ${computerchoice} beats ${humanChoice}`);
            computerScore ++;
            return ;
        } else {
            console.log(`That's a tie. You both chose ${humanChoice}`);
        }        
    }
}

let humanScore = 0,
    computerScore = 0;

