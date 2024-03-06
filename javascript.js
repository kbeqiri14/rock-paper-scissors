/*Definitions of score result*/
const playerScore = document.getElementById (`p_score`);
const computerScore = document.getElementById(`c_score`);
const finalScore = document.getElementById (`game_result`);
const timeReset = 2000;

/* Definitions of winning or losing round */
const winner = document.getElementById ('display_player')
const loser = document.getElementById ('display_comp')
const tie = document.getElementById ('display_tie')


/*Buttons with Event listeners*/
const rockButton = document.getElementById(`rock`);
const paperButton = document.getElementById(`paper`);
const scissorButton = document.getElementById (`scissors`);

rockButton.addEventListener (`click`, () => play(`rock`));
paperButton.addEventListener (`click`, () => play(`paper`));
scissorButton.addEventListener (`click`, () => play(`scissors`));

/* Reset the game*/
const reset = document.getElementById(`final_score`);
const resetButton = document.getElementById(`game_reset`)

resetButton.addEventListener(`click`, () => {
    playerScore.textContent = 0
    computerScore.textContent = 0
    finalScore.textContent =``;
    setTimeout (clearFunction,timeReset);
})


/* Randomize Computer Choice*/
function play(playerChoice){
    /*Determine computer random choice*/
    let element = [`rock`,`paper`,`scissors`];
    let computerChoice = element[Math.floor(Math.random()*element.length)];
    
    
    /* run a simulation of playing*/
    if (playerChoice === computerChoice){
        tie.textContent = `It's a draw! You both chose ${playerChoice}`;
        computerScore.textContent=parseInt(computerScore.textContent)+0;
        playerScore.textContent=parseInt(playerScore.textContent)+0;
        setTimeout (clearFunction,timeReset);

    } else if (
        (playerChoice === `rock` && computerChoice ===`paper`) ||
        (playerChoice === `paper` && computerChoice ===`scissors`) ||
        (playerChoice === `scissors` && computerChoice ===`rock`)
    ){
        loser.textContent = `Computer wins with ${computerChoice}`
        computerScore.textContent=parseInt(computerScore.textContent)+1;
        setTimeout (clearFunction,timeReset);
    } else {
        winner.textContent = `You win!`
        playerScore.textContent=parseInt(playerScore.textContent)+1
        setTimeout (clearFunction,timeReset);
    }
    gameResults();
}

/*automatically clears results*/
function clearFunction (){
    tie.textContent= ``;
    loser.textContent= ``;
    winner.textContent=``;
}

/*Game only goes to 5 rounds then resets*/
function gameResults() {
    let playerPoints = parseInt(playerScore.textContent)
    let computerPoints = parseInt(computerScore.textContent)

    if (playerPoints >= 5){
        finalScore.textContent = `Game over. YOU WIN!`
        finalScore.style.color = `green`
    } else if (computerPoints >= 5){
        finalScore.textContent = `Game over. YOU LOSE!`
        finalScore.style.color = `red`
    }
}


