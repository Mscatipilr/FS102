/* Define a hands array with the values 'rock', 'paper', and 'scissors';
const hands = ['rock' , 'paper', 'scissors'];
Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3
Define two objects for two players. Each player has name and getHand() properties.
Define a function called playRound() that
Takes two player objects as arguments
Gets hands from each
Determines the winner
Logs the hands played and name of the winner.
If its a tie, log the hands played and "it's a tie".
Returns the winner object (null if no winner) */

const hands = ['rock' , 'paper', 'scissors'];

function getHand() {
    return hands[parseInt(Math.random()*10)%3]};
    
let player1 = {
    name: 'Jack',
    getHand: getHand,
    wins: 0
};

let player2 = {
    name: 'Jill',
    getHand: getHand,
    wins: 0
};

let player3 = {
    name: 'Rosie',
    getHand: getHand,
    wins: 0
};

let player4 = {
    name: 'Zendaya',
    getHand: getHand,
    wins: 0
};

function playRound(player1, player2) {
    player1.hand = player1.getHand();
    player2.hand = player2.getHand();

    console.log(`${player1.name} plays ${player1.hand} and`);
    console.log(`${player2.name} plays ${player2.hand}.`);

    if (player1.hand === player2.hand) {
        console.log(`
It's a tie!

`);
        return null;
    } else if (
        (player1.hand === 'rock' && player2.hand === 'scissors') ||
        (player1.hand === 'paper' && player2.hand === 'rock') ||
        (player1.hand === 'scissors' && player2.hand === 'paper')
    ) {
        console.log(`
${player1.name} wins this round!`);            
        return {winner: player1, hand: player1.hand, player2Hand: player2.hand};
    } else {
        console.log(`
${player2.name} wins this round!`);
        return {winner: player2, hand: player2.hand, player2Hand: player2.hand};
      }

}

//const test = playRound(player1, player2);

let playUntil = 3;

const playGame = (player1, player2, playUntil) => {
    if (player1.wins === playUntil)  {
        console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The final winner is ${player1.name} with ${player1.wins} wins!
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
        return player1;
    } else if (player2.wins === playUntil) {
        console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The final winner is ${player2.name} with ${player2.wins} wins!
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
        return player2;
    } else {
        const roundResult = playRound(player1, player2);
        if (roundResult == null) {
            console.log(`The score is ${player1.name}: ${player1.wins}, ${player2.name}: ${player2.wins}.
        --            
`);
            return playGame(player1, player2, playUntil);
        } else if (roundResult.winner === player1.name) {
                player1.wins++;
                console.log(`The score is ${player1.name}: ${player1.wins}, ${player2.name}: ${player2.wins}.
            --            
`);
                return playGame(player1, player2, playUntil);
            } else {
                player2.wins++;
                console.log(`The score is ${player1.name}: ${player1.wins}, ${player2.name}: ${player2.wins}.
            --            
`);
                return playGame(player1, player2, playUntil);
            }
        }
}


//const finalWinner = playGame(player1, player2, playUntil);



const playTournament = (player1, player2, player3, player4, playUntil) => {
    player1.wins = 0;
    player2.wins = 0;
    player3.wins = 0;
    player4.wins = 0;
    
    const winner1 = playGame(player1, player2, playUntil);
    const winner2 = playGame(player3, player4, playUntil);

    const tournamentWinner = playGame(winner1, winner2, playUntil);

    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
${tournamentWinner.name} is the world champion!
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
}

playTournament(player1, player2, player3, player4, 3);