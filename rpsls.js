// array of options
const options = ["rock", "paper", "scissors", "lizard", "spock"];

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

// function to determine user selection, second parameter of playRound function
function userPlay() {

    playerSelection = prompt("Rock, Paper, Scissors, Lizard, Spock...!");
    return playerSelection;

}


//single round function, takes the computerPlay and userPlay functions as arguments
function playRound(comp, player) {

        if (comp.toLowerCase() == "rock" && player.toLowerCase() == "scissors") {
            computerScore++;
            return "Computer chose Rock, which crushes your Scissors! You lose!";                
        } else if (comp.toLowerCase() == "rock" && player.toLowerCase() == "lizard") {
            computerScore++;
            return "Computer chose Rock, which crushes your Lizard! You lose!";
        } else if (comp.toLowerCase() == "scissors" && player.toLowerCase() == "paper") {
            computerScore++;
            return "Computer chose Scissors, which cuts your Paper! You lose!";
        } else if (comp.toLowerCase() == "scissors" && player.toLowerCase() == "lizard") {
            computerScore++;
            return "Computer chose Scissors, which decapitates your Lizard! You lose!";
        } else if (comp.toLowerCase() == "paper" && player.toLowerCase() == "rock") {
            computerScore++;
            return "Computer chose Paper, which covers your Rock! You lose!";                    
        } else if (comp.toLowerCase() == "paper" && player.toLowerCase() == "spock") {
            computerScore++;
            return "Computer chose Paper, which disproves your Spock! You lose!";                    
        } else if (comp.toLowerCase() == "lizard" && player.toLowerCase() == "spock") {
            computerScore++;
            return "Computer chose Lizard, which poisons your Spock! You lose!";                    
        } else if (comp.toLowerCase() == "lizard" && player.toLowerCase() == "paper") {
            computerScore++;
            return "Computer chose Lizard, which eats your Paper! You lose!";                    
        } else if (comp.toLowerCase() == "spock" && player.toLowerCase() == "rock") {
            computerScore++;
            return "Computer chose Spock, which vaporizes your Rock! You lose!";                    
        } else if (comp.toLowerCase() == "spock" && player.toLowerCase() == "scissors") {
            computerScore++;
            return "Computer chose Spock, which smashes your Scissors! You lose!";                    
        } else if (comp.toLowerCase() == "rock" && player.toLowerCase() == "paper") {
            playerScore++;
            return "Your Paper covers the computer's Rock! You win!";                   
        } else if (comp.toLowerCase() == "spock" && player.toLowerCase() == "paper") {
            playerScore++;
            return "Your Paper disproves the computer's Spock! You win!";                   
        } else if (comp.toLowerCase() == "paper" && player.toLowerCase() == "scissors") {
            playerScore++;
            return "Your Scissors beats the computer's Paper! You win!";
        } else if (comp.toLowerCase() == "lizard" && player.toLowerCase() == "scissors") {
            playerScore++;
            return "Your Scissors decapitates the computer's Lizard! You win!";
        } else if (comp.toLowerCase() == "scissors" && player.toLowerCase() == "rock") {
            playerScore++;
            return "Your Rock beats the computer's Scissors! You win!";
        } else if (comp.toLowerCase() == "lizard" && player.toLowerCase() == "rock") {
            playerScore++;
            return "Your Rock crushes the computer's Lizard! You win!";
        } else if (comp.toLowerCase() == "spock" && player.toLowerCase() == "lizard") {
            playerScore++;
            return "Your Lizard poisons the computer's Spock! You win!";
        } else if (comp.toLowerCase() == "paper" && player.toLowerCase() == "lizard") {
            playerScore++;
            return "Your Lizard eats the computer's Paper! You win!";
        } else if (comp.toLowerCase() == "rock" && player.toLowerCase() == "spock") {
            playerScore++;
            return "Your Spock vaporizes the computer's Rock! You win!";
        } else if (comp.toLowerCase() == "scissors" && player.toLowerCase() == "spock") {
            playerScore++;
            return "Your Spock smashes the computer's Scissors! You win!";
        } else if (comp.toLowerCase() == player.toLowerCase()) {
            return "The computer also chose " + playerSelection + ". " + "It's a tie!";
        }
}

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