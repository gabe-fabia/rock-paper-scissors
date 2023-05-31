function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    // console.log(randomNumber);

    if (randomNumber === 1) {
        return "Rock"
    }
    else if (randomNumber === 2) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

function capitalize(string) {
    const firstLetter = string.charAt(0);
    const restOfString = string.slice(1);
    
    return firstLetter.toUpperCase() + restOfString.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionCapitalized = capitalize(playerSelection);

    if (playerSelectionCapitalized === computerSelection) {
        return "It's a tie!"
    }

    else if (playerSelectionCapitalized === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors."
    }

    else if (playerSelectionCapitalized === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock."
    }

    else if (playerSelectionCapitalized === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper."
    }

    else if (computerSelection === "Rock" && playerSelectionCapitalized === "Scissors") {
        return "You lose! Rock beats Scissors."
    }

    else if (computerSelection === "Paper" && playerSelectionCapitalized === "Rock") {
        return "You lose! Paper beats Rock."
    }

    else if (computerSelection === "Scissors" && playerSelectionCapitalized === "Paper") {
        return "You lose! Scissors beats Paper."
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));

// prompt() for user input
