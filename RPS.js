const options = ["Rock" ,"paper", "scissors"];
function getComputerChoice() {
    let choice = options[Math.floor(Math.random() * options.length)];
   return choice;
}

function getPlayerChoice() {
    let validated = false 
}