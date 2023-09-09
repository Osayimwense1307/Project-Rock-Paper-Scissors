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

function playRound(computerSelection, playerSelection) {
    const result = checkWinner(computerSelection, playerSelection)
    if (result == `player`) {
        console.log(`I won ${playerSelection} beats ${computerSelection}`);
    } else if (result == `computer`) {
        console.log(`You won ${computerSelection} beats ${playerSelection}`);
    } else {
        console.log("It's a tie")
    }        
    
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    console.log("A welcoming text");

    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(computerSelection,playerSelection));
        
        if (checkWinner(computerSelection,playerSelection) == `player`) {
            playerScore++;  
        } else if (checkWinner(computerSelection,playerSelection) == `computer`) {
            computerScore++;
        } 
                
    }
    console.log("Game over.")

    if (playerScore > computerScore) {
        console.log("Player wins")
    } else if (playerScore < computerScore) {
        console.log("Computer wins")
    } else {
       console.log("Its a tie"); 
    }
}
playGame();