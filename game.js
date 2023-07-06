function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);

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

function game() {

    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;

    alert("press button face computer");

    const buttons = document.querySelectorAll('button');

    const body = document.querySelector('body');
    const results = document.createElement('div');

    results.classList.add('results');
    body.appendChild(results);
    results.textContent = `Player Score: ${playerWins}, Bot Score: ${computerWins}, Ties: ${ties}`;


    buttons.forEach((button) => {

        button.addEventListener('click', () => {
            let round = playRound(button.id, getComputerChoice());
            // console.log(round);

            if (round.search("tie") !== -1) {
                // console.log("It's a tie this round!")
                ties++
            }

            else if (round.search("win") !== -1) {
                // console.log("Player wins this round!")
                playerWins++
            }

            else {
                // console.log("Computer wins this round!")
                computerWins++
            }

            results.textContent = `Player Score: ${playerWins}, Bot Score: ${computerWins}, Ties: ${ties}`;
            if (playerWins == 5) {
                alert("Player Wins!");
            }
            else if (computerWins == 5) {
                alert("Computer Wins!")
            }
        })

    
    });



}

game()
