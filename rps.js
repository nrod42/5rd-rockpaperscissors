
function computerPlay() {
    let computerChoice = Math.random();
    if (computerChoice < 0.34) {
        return 'rock';
    } else if (computerChoice <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function game() {
    let computerSelection;
    let playerSelection;
    
    function playRound(playerSelection, computerSelection) {
       
        computerSelection = computerPlay();
        playerSelection = prompt('Rock, paper, or scissor').toLowerCase()
       
        if (playerSelection === computerSelection) {
            return 'tie';
        } else if (playerSelection === 'rock') {
            if (computerSelection === 'paper') {
                return 'lose';
            } else {
                return 'win';
            }
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'scissors') {
                return 'lose';
            } else {
                return 'win';
            }
        } else if (playerSelection === 'scissors') {
            if (computerSelection === 'rock') {
                return 'lose';
            } else {
            return 'win';
            }
        } else {
        return 'invalid';
        }
    }

    let result;
    let win = 0;
    let loss = 0;
    let tie = 0;

    for (let i=1; i<6; i++) {
        result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result === 'win') {
            win++;
        } else if (result === 'lose') {
            loss++;
        } else {
            tie++;
        } 
    }

    console.log('wins: '+win)
    console.log('losses: '+loss)
    console.log('ties: '+tie)

    if (win > loss) {
        console.log('You beat me!');
    } else if (win<loss) {
        console.log('You lose!!!')
    } else {
        console.log('it\'s a tie');
    }
}

game();