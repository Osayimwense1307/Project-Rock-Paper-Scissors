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