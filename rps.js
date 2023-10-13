const choices = ["rock", "paper", "scissors"];
const container = document.querySelector(".container");
const scoreElement = document.createElement("p");
let playerScore = 0;
let computerScore = 0;

scoreElement.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
container.appendChild(scoreElement);

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        scoreElement.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        scoreElement.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

const choiceElements = document.querySelectorAll("li:not(#reset)");
choiceElements.forEach((choiceElement) => {
    choiceElement.addEventListener("click", () => {
        const playerSelection = choiceElement.id;
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        alert(result);
    });
});

document.getElementById("reset").addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    scoreElement.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
});
