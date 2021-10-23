// array of options
const options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

// pre-declared empty variables for storing play selections
let computerSelection;
let playerSelection;

// score declarations, starting at 0
let computerScore = 0;
let playerScore = 0;

// function to generate a random number
function random(mn, mx) {
    return Math.floor(Math.random() * (mx - mn));
}

// function to randomly select an item from the array and store it as computerSelection, uses the random function, first parameter of playRound function
function computerPlay() {
    computerSelection = options[random(0, 5)];
    return computerSelection;
    
}

//Results

const playerWinText = document.querySelector("#playerWinText");
const playerLoseText = document.querySelector("#playerLoseText");
const tieText = document.querySelector("#tieText");

const compWinRockScissors = document.querySelector("#compWinRockScissors");
const compWinRockLizard = document.querySelector("#compWinRockLizard");
const compWinScissorsPaper = document.querySelector("#compWinScissorsPaper");
const compWinScissorsLizard = document.querySelector("#compWinScissorsLizard");
const compWinPaperRock = document.querySelector("#compWinPaperRock");
const compWinPaperSpock = document.querySelector("#compWinPaperSpock");
const compWinLizardSpock = document.querySelector("#compWinLizardSpock");
const compWinLizardPaper = document.querySelector("#compWinLizardPaper");
const compWinSpockRock = document.querySelector("#compWinSpockRock");
const compWinSpockScissors = document.querySelector("#compWinSpockScissors");

const playWinRockScissors = document.querySelector("#playWinRockScissors");
const playWinRockLizard = document.querySelector("#playWinRockLizard");
const playWinScissorsPaper = document.querySelector("#playWinScissorsPaper");
const playWinScissorsLizard = document.querySelector("#playWinScissorsLizard");
const playWinPaperRock = document.querySelector("#playWinPaperRock");
const playWinPaperSpock = document.querySelector("#playWinPaperSpock");
const playWinLizardSpock = document.querySelector("#playWinLizardSpock");
const playWinLizardPaper = document.querySelector("#playWinLizardPaper");
const playWinSpockRock = document.querySelector("#playWinSpockRock");
const playWinSpockScissors = document.querySelector("#playWinSpockScissors");

function setResult() {

    if (playerWin === true) {
        playerWinText.classList.remove("hidden");
        setTimeout(function() {
            playerWinText.classList.add("hidden");
        }, 4000);
        playerWinText.classList.add("fadeIn");
        setTimeout(function() {
            playerWinText.classList.remove("fadeIn");
        }, 4000);
    } else if (compWin === true) {
        playerLoseText.classList.remove("hidden");
        setTimeout(function() {
            playerLoseText.classList.add("hidden");
        }, 4000);
        playerLoseText.classList.add("fadeIn");
        setTimeout(function() {
            playerLoseText.classList.remove("fadeIn");
        }, 4000);
    } else {
        tieText.classList.remove("hidden");
        setTimeout(function() {
            tieText.classList.add("hidden");
        }, 4000);
        tieText.classList.add("fadeIn");
        setTimeout(function() {
            tieText.classList.remove("fadeIn");
        }, 4000);
    }
}

//single round function, takes the computerPlay and userPlay functions as arguments

let playerWin = "";
let compWin = "";

function playRound(comp, player) {

        if (comp.toLowerCase() == "rock" && player.toLowerCase() == "scissors") {
            computerScore++;
            compWin = true;
            playerWin = false;
            compWinRockScissors.classList.remove("hidden");
            setTimeout(function() {
                compWinRockScissors.classList.add("hidden");
            }, 4000);
            compWinRockScissors.classList.add("fadeIn");
            setTimeout(function() {
                compWinRockScissors.classList.remove("fadeIn");
            }, 4000);         
        } else if (comp.toLowerCase() == "rock" && player.toLowerCase() == "lizard") {
            computerScore++;
            compWin = true;
            playerWin = false;
            compWinRockScissors.classList.remove("hidden");
            setTimeout(function() {
                compWinRockLizard.classList.add("hidden");
            }, 4000);
            compWinRockScissors.classList.add("fadeIn");
            setTimeout(function() {
                compWinRockLizard.classList.remove("fadeIn");
            }, 4000);  
        } else if (comp.toLowerCase() == "scissors" && player.toLowerCase() == "paper") {
            computerScore++;
            compWin = true;
            playerWin = false;
            compWinScissorsPaper.classList.remove("hidden");
            setTimeout(function() {
                compWinScissorsPaper.classList.add("hidden");
            }, 4000);
            compWinScissorsPaper.classList.add("fadeIn");
            setTimeout(function() {
                compWinScissorsPaper.classList.remove("fadeIn");
            }, 4000);  
        } else if (comp.toLowerCase() == "scissors" && player.toLowerCase() == "lizard") {
            computerScore++;
            compWin = true;
            playerWin = false;
            compWinScissorsLizard.classList.remove("hidden");
            setTimeout(function() {
                compWinScissorsLizard.classList.add("hidden");
            }, 4000);
            compWinScissorsLizard.classList.add("fadeIn");
            setTimeout(function() {
                compWinScissorsLizard.classList.remove("fadeIn");
            }, 4000);
        } else if (comp.toLowerCase() == "paper" && player.toLowerCase() == "rock") {
            computerScore++;
            compWin = true;
            playerWin = false;
            compWinPaperRock.classList.remove("hidden");
            setTimeout(function() {
                compWinPaperRock.classList.add("hidden");
            }, 4000);
            compWinPaperRock.classList.add("fadeIn");
            setTimeout(function() {
                compWinPaperRock.classList.remove("fadeIn");
            }, 4000);                    
        } else if (comp.toLowerCase() == "paper" && player.toLowerCase() == "spock") {
            computerScore++;
            compWin = true;
            playerWin = false;
            compWinPaperSpock.classList.remove("hidden");
            setTimeout(function() {
                compWinPaperSpock.classList.add("hidden");
            }, 4000);
            compWinPaperSpock.classList.add("fadeIn");
            setTimeout(function() {
                compWinPaperSpock.classList.remove("fadeIn");
            }, 4000);                    
        } else if (comp.toLowerCase() == "lizard" && player.toLowerCase() == "spock") {
            computerScore++;
            compWin = true;
            playerWin = false;
            compWinLizardSpock.classList.remove("hidden");
            setTimeout(function() {
                compWinLizardSpock.classList.add("hidden");
            }, 4000);
            compWinLizardSpock.classList.add("fadeIn");
            setTimeout(function() {
                compWinLizardSpock.classList.remove("fadeIn");
            }, 4000);                    
        } else if (comp.toLowerCase() == "lizard" && player.toLowerCase() == "paper") {
            computerScore++;
            compWin = true;
            playerWin = false;
            compWinLizardPaper.classList.remove("hidden");
            setTimeout(function() {
                compWinLizardPaper.classList.add("hidden");
            }, 4000);
            compWinLizardPaper.classList.add("fadeIn");
            setTimeout(function() {
                compWinLizardPaper.classList.remove("fadeIn");
            }, 4000);                   
        } else if (comp.toLowerCase() == "spock" && player.toLowerCase() == "rock") {
            computerScore++;
            compWin = true;
            playerWin = false;
            compWinSpockRock.classList.remove("hidden");
            setTimeout(function() {
                compWinSpockRock.classList.add("hidden");
            }, 4000);
            compWinSpockRock.classList.add("fadeIn");
            setTimeout(function() {
                compWinSpockRock.classList.remove("fadeIn");
            }, 4000);                  
        } else if (comp.toLowerCase() == "spock" && player.toLowerCase() == "scissors") {
            computerScore++;
            compWin = true;
            playerWin = false;
            compWinSpockScissors.classList.remove("hidden");
            setTimeout(function() {
                compWinSpockScissors.classList.add("hidden");
            }, 4000);
            compWinSpockScissors.classList.add("fadeIn");
            setTimeout(function() {
                compWinSpockScissors.classList.remove("fadeIn");
            }, 4000);                   
        } else if (comp.toLowerCase() == "rock" && player.toLowerCase() == "paper") {
            playerScore++;
            playerWin = true;
            compWin = false;
            playWinPaperRock.classList.remove("hidden");
            setTimeout(function() {
                playWinPaperRock.classList.add("hidden");
            }, 4000);
            playWinPaperRock.classList.add("fadeIn");
            setTimeout(function() {
                playWinPaperRock.classList.remove("fadeIn");
            }, 4000);                     
        } else if (comp.toLowerCase() == "spock" && player.toLowerCase() == "paper") {
            playerScore++;
            playerWin = true;
            compWin = false;
            playWinPaperSpock.classList.remove("hidden");
            setTimeout(function() {
                playWinPaperSpock.classList.add("hidden");
            }, 4000);
            playWinPaperSpock.classList.add("fadeIn");
            setTimeout(function() {
                playWinPaperSpock.classList.remove("fadeIn");
            }, 4000);                     
        } else if (comp.toLowerCase() == "paper" && player.toLowerCase() == "scissors") {
            playerScore++;
            playerWin = true;
            compWin = false;
            playWinScissorsPaper.classList.remove("hidden");
            setTimeout(function() {
                playWinScissorsPaper.classList.add("hidden");
            }, 4000);
            playWinScissorsPaper.classList.add("fadeIn");
            setTimeout(function() {
                playWinScissorsPaper.classList.remove("fadeIn");
            }, 4000); 
        } else if (comp.toLowerCase() == "lizard" && player.toLowerCase() == "scissors") {
            playerScore++;
            playerWin = true;
            compWin = false;
            playWinScissorsLizard.classList.remove("hidden");
            setTimeout(function() {
                playWinScissorsLizard.classList.add("hidden");
            }, 4000);
            playWinScissorsLizard.classList.add("fadeIn");
            setTimeout(function() {
                playWinScissorsLizard.classList.remove("fadeIn");
            }, 4000);
        } else if (comp.toLowerCase() == "scissors" && player.toLowerCase() == "rock") {
            playerScore++;
            playerWin = true;
            compWin = false;
            playWinRockScissors.classList.remove("hidden");
            setTimeout(function() {
                playWinRockScissors.classList.add("hidden");
            }, 4000);
            playWinRockScissors.classList.add("fadeIn");
            setTimeout(function() {
                playWinRockScissors.classList.remove("fadeIn");
            }, 4000);
        } else if (comp.toLowerCase() == "lizard" && player.toLowerCase() == "rock") {
            playerScore++;
            playerWin = true;
            compWin = false;
            playWinRockLizard.classList.remove("hidden");
            setTimeout(function() {
                playWinRockLizard.classList.add("hidden");
            }, 4000);
            playWinRockLizard.classList.add("fadeIn");
            setTimeout(function() {
                playWinRockLizard.classList.remove("fadeIn");
            }, 4000);
        } else if (comp.toLowerCase() == "spock" && player.toLowerCase() == "lizard") {
            playerScore++;
            playerWin = true;
            compWin = false;
            playWinLizardSpock.classList.remove("hidden");
            setTimeout(function() {
                playWinLizardSpock.classList.add("hidden");
            }, 4000);
            playWinLizardSpock.classList.add("fadeIn");
            setTimeout(function() {
                playWinLizardSpock.classList.remove("fadeIn");
            }, 4000);
        } else if (comp.toLowerCase() == "paper" && player.toLowerCase() == "lizard") {
            playerScore++;
            playerWin = true;
            compWin = false;
            playWinLizardPaper.classList.remove("hidden");
            setTimeout(function() {
                playWinLizardPaper.classList.add("hidden");
            }, 4000);
            playWinLizardPaper.classList.add("fadeIn");
            setTimeout(function() {
                playWinLizardPaper.classList.remove("fadeIn");
            }, 4000);
        } else if (comp.toLowerCase() == "rock" && player.toLowerCase() == "spock") {
            playerScore++;
            playerWin = true;
            compWin = false;
            playWinSpockRock.classList.remove("hidden");
            setTimeout(function() {
                playWinSpockRock.classList.add("hidden");
            }, 4000);
            playWinSpockRock.classList.add("fadeIn");
            setTimeout(function() {
                playWinSpockRock.classList.remove("fadeIn");
            }, 4000);
        } else if (comp.toLowerCase() == "scissors" && player.toLowerCase() == "spock") {
            playerScore++;
            playerWin = true;
            compWin = false;
            playWinSpockScissors.classList.remove("hidden");
            setTimeout(function() {
                playWinSpockScissors.classList.add("hidden");
            }, 4000);
            playWinSpockScissors.classList.add("fadeIn");
            setTimeout(function() {
                playWinSpockScissors.classList.remove("fadeIn");
            }, 4000);
        } else if (comp.toLowerCase() == player.toLowerCase()) {
            playerWin = false;
            compWin = false;
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
    setIconBackground();
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
    setIconBackground();
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
    setIconBackground();
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
    setIconBackground();
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
    setIconBackground();
});

// const buttons = document.querySelectorAll(".choiceButton");

//Score boxes

const compScoreBox = document.querySelector("#compScoreBox");

const compScoreText = document.querySelector("#compScoreText");
compScoreText.textContent = computerScore;

const playerScoreBox = document.querySelector("#playerScoreBox");

const playerScoreText = document.querySelector("#playerScoreText");
playerScoreText.textContent = playerScore;

// Plays

const playerPlay = document.querySelector("#playerPlay");
const compPlay = document.querySelector("#compPlay");

function showPlayerPlay(playerSelection) {

    const playerPlayIcon = document.querySelector("#playerPlayIcon");
    playerPlayIcon.setAttribute('src', `img/${playerSelection}.svg`);
    if (playerSelection.toLowerCase() == "rock") {
        playerPlayIcon.style.backgroundColor = "var(--neutral-500)";
    } else if (playerSelection.toLowerCase() == "paper") {
        playerPlayIcon.style.backgroundColor = "var(--beige-100)";
    } else if (playerSelection.toLowerCase() == "scissors") {
        playerPlayIcon.style.backgroundColor = "var(--yellow-100)";
    } else if (playerSelection.toLowerCase() == "lizard") {
        playerPlayIcon.style.backgroundColor = "var(--green-100)";
    } else if (playerSelection.toLowerCase() == "spock") {
        playerPlayIcon.style.backgroundColor = "var(--blue-100)";
    }

}

function showCompPlay(computerSelection) {

    const compPlayIcon = document.querySelector("#compPlayIcon");
    compPlayIcon.setAttribute('src', `img/${computerSelection}.svg`);
    if (computerSelection == "Rock") {
        compPlayIcon.style.backgroundColor = "var(--neutral-500)";
    } else if (computerSelection.toLowerCase() == "paper") {
        compPlayIcon.style.backgroundColor = "var(--beige-100)";
    } else if (computerSelection.toLowerCase() == "scissors") {
        compPlayIcon.style.backgroundColor = "var(--yellow-100)";
    } else if (computerSelection.toLowerCase() == "lizard") {
        compPlayIcon.style.backgroundColor = "var(--green-100)";
    } else if (computerSelection.toLowerCase() == "spock") {
        compPlayIcon.style.backgroundColor = "var(--blue-100)";
    }

}

/*

// Icon Backgrounds

function setIconBackground() {

    //const playerPlayIcon = document.querySelector("#playerPlayIcon");
    //const compPlayIcon = document.querySelector("#compPlayIcon");

    if (playerSelection.toLowerCase() == "rock") {
        document.getElementById("playerPlayIcon").style.backgroundColor = "blue";
    } else if (playerSelection.toLowerCase() == "paper") {
        document.getElementById("playerPlayIcon").style.backgroundColor = "blue";
    } else if (playerSelection.toLowerCase() == "scissors") {
        document.getElementById("playerPlayIcon").style.backgroundColor = "blue";
    } else if (playerSelection.toLowerCase() == "lizard") {
        document.getElementById("playerPlayIcon").style.backgroundColor = "blue";
    } else if (playerSelection.toLowerCase() == "spock") {
        document.getElementById("playerPlayIcon").style.backgroundColor = "blue";
    }

    if (computerSelection.toLowerCase() == "rock") {
        document.getElementById("compPlayIcon").style.backgroundColor = "blue";
    } else if (computerSelection.toLowerCase() == "paper") {
        document.getElementById("compPlayIcon").style.backgroundColor = "blue";
    } else if (computerSelection.toLowerCase() == "scissors") {
        document.getElementById("compPlayIcon").style.backgroundColor = "blue";
    } else if (computerSelection.toLowerCase() == "lizard") {
        document.getElementById("compPlayIcon").style.backgroundColor = "blue";
    } else if (computerSelection.toLowerCase() == "spock") {
        document.getElementById("compPlayIcon").style.backgroundColor = "blue";
    }

}

*/

// Fades

function fadeIn() {
    playerPlay.classList.add("fadeIn");
    setTimeout(function() {
        playerPlay.classList.remove("fadeIn");
    }, 4000);
    compPlay.classList.add("fadeIn");
    setTimeout(function() {
        compPlay.classList.remove("fadeIn");
    }, 4000);
    resultText.classList.add("fadeIn");
    setTimeout(function() {
        resultText.classList.remove("fadeIn");
    }, 4000);
    playerWinText.classList.add("fadeIn");
    setTimeout(function() {
        playerWinText.classList.remove("fadeIn");
    }, 4000);
    playerLoseText.classList.add("fadeIn");
    setTimeout(function() {
        playerLoseText.classList.remove("fadeIn");
    }, 4000);
    tieText.classList.add("fadeIn");
    setTimeout(function() {
        tieText.classList.remove("fadeIn");
    }, 4000);
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
// const resultText = document.querySelector("#resultText");


