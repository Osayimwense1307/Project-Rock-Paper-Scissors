const options = ["Rock" ,"paper", "scissors"];

function getComputerChoice() {
    let choice = options[Math.floor(Math.random() * options.length)];
   return choice;
}

function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt("Rock paper Scissors")
        if (choice == null) {
            continue;
        }
        const lowerChoice = choice.toLowerCase();
        if (options.includes(lowerChoice)) {
            validatedInput = true;
            return lowerChoice;
        }
    }

}

function checkWinner(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        return `It's a tie`;
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
        return `player`;
    } else {
      return `computer`;  
    }

}