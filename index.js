// 3 options -"rock", "paper" and "scissors"

let options = ["rock", "paper", "scissors"];
let randomNum = Math.floor(Math.random() * 3) + 1;
return options[randomNum];

let playerScore = 0:
let computerScore = 0;

function playGame(){
    // while??
    while (playerScore < 3 && computerScore < 3) {
        let playerChoice = "rock";
        let computerChoice = 
        // conditional
        if (playerChoice === computerSelection) {
            console.log(`Draw - ${playerScore} : ${computerScore}`);
        }else if (playerChoice === "scissors" && computerChoice === "paper") {
            playerScore += 1;
            console.log(`You won! ${playerScore} : ${computerScore}`);
        }else if (playerChoice === "paper" && computerChoice === "rock") {
            playerScore +=1;
            console.log(`You won! ${playerScore} : ${computerScore}`);
        }else{
            computerScore += 1;
            console.log(`You lost ${playerScore} : ${computerScore}`);
        }
    
        if (playerScore === 3){
            console.log("Congratulations you won!")
            }else{
                console.log("The computer won... better luck next time.")
            }
        }
    }
}