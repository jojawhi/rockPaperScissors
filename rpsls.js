// array of options
const options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

// pre-declared empty variables for storing play selections
let computerSelection;
let playerSelection;

// score declarations, starting at 0
let computerScore = 0;
let playerScore = 0;

let result = "";

// function to generate a random number
function random(mn, mx) {
    return Math.floor(Math.random() * (mx - mn));
}

// function to randomly select an item from the array and store it as computerSelection, uses the random function, first parameter of playRound function
function computerPlay() {
    computerSelection = options[random(0, 5)];
    return computerSelection;
    
}

/*
// function to determine user selection, second parameter of playRound function
function userPlay() {

    playerSelection = prompt("Rock, Paper, Scissors, Lizard, Spock...!");
    return playerSelection;

}
*/

//single round function, takes the computerPlay and userPlay functions as arguments
let playerWin = "";
let compWin = "";

function playRound(comp, player) {

        if (comp.toLowerCase() == "rock" && player.toLowerCase() == "scissors") {
            computerScore++;
            compWin = true;
            playerWin = false;
            result = "Computer's Rock CRUSHES your Scissors! You lose!";              
        } else if (comp.toLowerCase() == "rock" && player.toLowerCase() == "lizard") {
            computerScore++;
            compWin = true;
            playerWin = false;
            result = "Computer's Rock CRUSHES your Lizard! You lose!";
        } else if (comp.toLowerCase() == "scissors" && player.toLowerCase() == "paper") {
            computerScore++;
            compWin = true;
            playerWin = false;
            result = "Computer's Scissors CUTS your Paper! You lose!";
        } else if (comp.toLowerCase() == "scissors" && player.toLowerCase() == "lizard") {
            computerScore++;
            compWin = true;
            playerWin = false;
            result = "Computer's Scissors DECAPITATES your Lizard! You lose!";
        } else if (comp.toLowerCase() == "paper" && player.toLowerCase() == "rock") {
            computerScore++;
            compWin = true;
            playerWin = false;
            result = "Computer's Paper COVERS your Rock! You lose!";                    
        } else if (comp.toLowerCase() == "paper" && player.toLowerCase() == "spock") {
            computerScore++;
            compWin = true;
            playerWin = false;
            result = "Computer's Paper DISPROVES your Spock! You lose!";                    
        } else if (comp.toLowerCase() == "lizard" && player.toLowerCase() == "spock") {
            computerScore++;
            compWin = true;
            playerWin = false;
            result = "Computer's Lizard POSIONS your Spock! You lose!";                    
        } else if (comp.toLowerCase() == "lizard" && player.toLowerCase() == "paper") {
            computerScore++;
            compWin = true;
            playerWin = false;
            result = "Computer's Lizard EATS your Paper! You lose!";                    
        } else if (comp.toLowerCase() == "spock" && player.toLowerCase() == "rock") {
            computerScore++;
            compWin = true;
            playerWin = false;
            result = "Computer's Spock VAPORIZES your Rock! You lose!";                    
        } else if (comp.toLowerCase() == "spock" && player.toLowerCase() == "scissors") {
            computerScore++;
            compWin = true;
            playerWin = false;
            result = "Computer's Spock SMASHES your Scissors! You lose!";                    
        } else if (comp.toLowerCase() == "rock" && player.toLowerCase() == "paper") {
            playerScore++;
            playerWin = true;
            compWin = false;
            result = "Your Paper COVERS computer's Rock! You win!";                   
        } else if (comp.toLowerCase() == "spock" && player.toLowerCase() == "paper") {
            playerScore++;
            playerWin = true;
            compWin = false;
            result = "Your Paper DISPROVES computer's Spock! You win!";                   
        } else if (comp.toLowerCase() == "paper" && player.toLowerCase() == "scissors") {
            playerScore++;
            playerWin = true;
            compWin = false;
            result = "Your Scissors CUTS computer's Paper! You win!";
        } else if (comp.toLowerCase() == "lizard" && player.toLowerCase() == "scissors") {
            playerScore++;
            playerWin = true;
            compWin = false;
            result = "Your Scissors DECAPITATES computer's Lizard! You win!";
        } else if (comp.toLowerCase() == "scissors" && player.toLowerCase() == "rock") {
            playerScore++;
            playerWin = true;
            compWin = false;
            result = "Your Rock CRUSHES computer's Scissors! You win!";
        } else if (comp.toLowerCase() == "lizard" && player.toLowerCase() == "rock") {
            playerScore++;
            playerWin = true;
            compWin = false;
            result = "Your Rock CRUSHES computer's Lizard! You win!";
        } else if (comp.toLowerCase() == "spock" && player.toLowerCase() == "lizard") {
            playerScore++;
            playerWin = true;
            compWin = false;
            result = "Your Lizard POSIONS computer's Spock! You win!";
        } else if (comp.toLowerCase() == "paper" && player.toLowerCase() == "lizard") {
            playerScore++;
            playerWin = true;
            compWin = false;
            result = "Your Lizard EATS computer's Paper! You win!";
        } else if (comp.toLowerCase() == "rock" && player.toLowerCase() == "spock") {
            playerScore++;
            playerWin = true;
            compWin = false;
            result = "Your Spock VAPORIZES computer's Rock! You win!";
        } else if (comp.toLowerCase() == "scissors" && player.toLowerCase() == "spock") {
            playerScore++;
            playerWin = true;
            compWin = false;
            result = "Your Spock SMASHES computer's Scissors! You win!";
        } else if (comp.toLowerCase() == player.toLowerCase()) {
            playerWin = false;
            compWin = false;
            result = "Both chose " + playerSelection + ". " + "It's a tie!";
        }
}
/*
// the game function, which loops 5 times and runs the playRound function each time, running results to the console
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(computerPlay(), userPlay()));
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You won " + playerScore + " to " + computerScore + "!");
    } else if (computerScore > playerScore) {
        console.log("The computer won " + computerScore + " to " + playerScore + " this time!");
    } else {
        console.log("It's a tie! " + playerScore + " to " + computerScore + "! Let's go for a tie-breaker!");
    }
}

game();
*/



//Buttons

const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", () => {
    playerSelection = "Rock";
    playRound(computerPlay(), playerSelection);
    showPlayerPlay(playerSelection);
    showCompPlay(computerSelection);
    compScoreText.textContent = computerScore;
    playerScoreText.textContent = playerScore;
    setResult();
    fadeIn();
    setScoreColour();
    disableButtons();
});

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", () => {
    playerSelection = "Paper";
    playRound(computerPlay(), playerSelection);
    showPlayerPlay(playerSelection);
    showCompPlay(computerSelection);
    compScoreText.textContent = computerScore;
    playerScoreText.textContent = playerScore;
    setResult();
    fadeIn();
    setScoreColour();
    disableButtons();
});

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", () => {
    playerSelection = "Scissors";
    playRound(computerPlay(), playerSelection);
    showPlayerPlay(playerSelection);
    showCompPlay(computerSelection);
    compScoreText.textContent = computerScore;
    playerScoreText.textContent = playerScore;
    setResult();
    fadeIn();
    setScoreColour();
    disableButtons();
});

const lizardBtn = document.querySelector("#lizardBtn");
lizardBtn.addEventListener("click", () => {
    playerSelection = "Lizard";
    playRound(computerPlay(), playerSelection);
    showPlayerPlay(playerSelection);
    showCompPlay(computerSelection);
    compScoreText.textContent = computerScore;
    playerScoreText.textContent = playerScore;
    setResult();
    fadeIn();
    setScoreColour();
    disableButtons();
});

const spockBtn = document.querySelector("#spockBtn");
spockBtn.addEventListener("click", () => {
    playerSelection = "Spock";
    playRound(computerPlay(), playerSelection);
    showPlayerPlay(playerSelection);
    showCompPlay(computerSelection);
    compScoreText.textContent = computerScore;
    playerScoreText.textContent = playerScore;
    setResult();
    fadeIn();
    setScoreColour();
    disableButtons();
});

const buttons = document.querySelectorAll(".choiceButton");

//Score boxes

const compScoreBox = document.querySelector("#compScoreBox");

const compScoreText = document.createElement("p");
compScoreText.textContent = computerScore;

compScoreBox.appendChild(compScoreText);

const playerScoreBox = document.querySelector("#playerScoreBox");

const playerScoreText = document.createElement("p");
playerScoreText.textContent = playerScore;

playerScoreBox.appendChild(playerScoreText);

// Plays

const playerPlay = document.querySelector("#playerPlay");
const compPlay = document.querySelector("#compPlay");

function showPlayerPlay(playerSelection) {

    const playerPlayIcon = document.querySelector("#playerPlayIcon");
    playerPlayIcon.setAttribute('src', `img/${playerSelection}.svg`);

}

function showCompPlay(computerSelection) {

    const compPlayIcon = document.querySelector("#compPlayIcon");
    compPlayIcon.setAttribute('src', `img/${computerSelection}.svg`);

}

// Fades

function fadeIn() {
    playerPlay.classList.add("fadeIn");
    setTimeout(function() {playerPlay.classList.remove("fadeIn");}, 4000);
    compPlay.classList.add("fadeIn");
    setTimeout(function() {compPlay.classList.remove("fadeIn");}, 4000);
    resultContainer.classList.add("longFade");
    setTimeout(function() {resultContainer.classList.remove("longFade");}, 6000);
}

// Score colors - needed to create playerWin and compWin variables to make this work

function setScoreColour() {
    if (playerWin === true) {
        playerScoreText.style.color = "green";
        compScoreText.style.color = "red";
    } else if (compWin === true) {
        playerScoreText.style.color = "red";
        compScoreText.style.color = "green";
    } else if (compWin === false && playerWin === false ) {
        playerScoreText.style.color = "orange";
        compScoreText.style.color = "orange";
    }
}

// Deactivate buttons until fade animation is complete to prevent early clicking

function disableButtons() {
    rockBtn.setAttribute("disabled", true);
    rockBtn.classList.add("disabledBtn");
    setTimeout(function() {
        rockBtn.removeAttribute("disabled", true);
        rockBtn.classList.remove("disabledBtn");
    }, 4000);
    paperBtn.setAttribute("disabled", true);
    paperBtn.classList.add("disabledBtn");
    setTimeout(function() {
        paperBtn.removeAttribute("disabled", true);
        paperBtn.classList.remove("disabledBtn");
    }, 4000);
    scissorsBtn.setAttribute("disabled", true);
    scissorsBtn.classList.add("disabledBtn");
    setTimeout(function() {
        scissorsBtn.removeAttribute("disabled", true);
        scissorsBtn.classList.remove("disabledBtn");
    }, 4000);
    lizardBtn.setAttribute("disabled", true);
    lizardBtn.classList.add("disabledBtn");
    setTimeout(function() {
        lizardBtn.removeAttribute("disabled", true);
        lizardBtn.classList.remove("disabledBtn");
    }, 4000);
    spockBtn.setAttribute("disabled", true);
    spockBtn.classList.add("disabledBtn");
    setTimeout(function() {
        spockBtn.removeAttribute("disabled", true);
        spockBtn.classList.remove("disabledBtn");
    }, 4000);
}

// Result display

const resultContainer = document.querySelector("#resultContainer");
const resultText = document.querySelector("#resultText");


function setResult() {
    resultText.textContent = result;
}

