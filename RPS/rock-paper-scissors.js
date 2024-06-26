const hands = ['rock', 'paper', 'scissors'];

function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}

let player1 = { name: '', getHand: getHand, wins: 0 };
let player2 = { name: '', getHand: getHand, wins: 0 };
let player3 = { name: '', getHand: getHand, wins: 0 };
let player4 = { name: '', getHand: getHand, wins: 0 };

function playRound(player1, player2) {
    player1.hand = player1.getHand();
    player2.hand = player2.getHand();

    if (player1.hand === player2.hand) {
        return null;
    } else if (
        (player1.hand === 'rock' && player2.hand === 'scissors') ||
        (player1.hand === 'paper' && player2.hand === 'rock') ||
        (player1.hand === 'scissors' && player2.hand === 'paper')
    ) {
        return player1;
    } else {
        return player2;
    }
}

function updateScoreboard() {
    document.getElementById('player1-score').textContent = `${player1.name}: ${player1.wins}`;
    document.getElementById('player2-score').textContent = `${player2.name}: ${player2.wins}`;
    document.getElementById('player3-score').textContent = `${player3.name}: ${player3.wins}`;
    document.getElementById('player4-score').textContent = `${player4.name}: ${player4.wins}`;
}

function displayWinner(winner) {
    document.getElementById('winner').textContent = `Winner: ${winner.name}`;
}

function resetScores() {
    player1.wins = 0;
    player2.wins = 0;
    player3.wins = 0;
    player4.wins = 0;
    updateScoreboard();
}

function setPlayerNames() {
    player1.name = document.getElementById('player1-name').value || 'Player 1';
    player2.name = document.getElementById('player2-name').value || 'Player 2';
    player3.name = document.getElementById('player3-name').value || 'Player 3';
    player4.name = document.getElementById('player4-name').value || 'Player 4';
}

const playGame = (player1, player2, playUntil) => {
    setPlayerNames();
    resetScores();

    while (player1.wins < playUntil && player2.wins < playUntil) {
        const winner = playRound(player1, player2);
        if (winner) {
            winner.wins++;
        }
        updateScoreboard();
    }

    const gameWinner = player1.wins === playUntil ? player1 : player2;
    displayWinner(gameWinner);
    return gameWinner;
}

const playTournament = (player1, player2, player3, player4, playUntil) => {
    setPlayerNames();
    resetScores();

    const winner1 = playGame(player1, player2, playUntil);
    const winner2 = playGame(player3, player4, playUntil);

    const tournamentWinner = playGame(winner1, winner2, playUntil);

    displayWinner(tournamentWinner);
}

document.getElementById('play-game').addEventListener('click', () => playGame(player1, player2, 3));
document.getElementById('play-tournament').addEventListener('click', () => playTournament(player1, player2, player3, player4, 3));
