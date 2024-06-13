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

const getHand = () => hands[parseInt(Math.random()*10)%3];
    
    /*{
    parseInt(Math.random()*10)%3;
    if (parseInt(Math.random()*10)%3 == 0) {
        return hands[0];
    } else if (parseInt(Math.random()*10)%3 == 1) {
        return hands[1];
    } else (parseInt(Math.random()*10)%3 == 2) {
        return hands[2];
    }
}*/
let player1 = {
    name: 'Jack',
    hand: getHand()
}

let player2 = {
    name: 'Jill',
    hand: getHand()
}

const playRound = (player1Name, player2Name) => {
    player1.name = player1Name,
    player2.name = player2Name,
    console.log(`${player1.name} has ${player1.hand}.`);
    console.log(`${player2.name} has ${player2.hand}.`);
    if (player1.hand === player2.hand) {
        return null,
        console.log('It\'s a tie!');
    } else if (
        (player1.hand === 'rock' && player2.hand === 'scissors') ||
        (player1.hand === 'paper' && player2.hand === 'rock') ||
        (player1.hand === 'scissors' && player2.hand === 'paper')
    ) {
        return {winner: player1.name, hand: player1.hand},
        console.log(`
${player1.name} is the winner!`);
    } else {
        return {winner: player2.name, hand: player2.hand},
        console.log(`
${player2.name} is the winner!`);
    }

}

playRound('Tommy', 'Jo');