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

console.log(getComputerChoice());
