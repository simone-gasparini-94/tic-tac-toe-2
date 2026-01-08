function createPlayer(name, mark) {
    return {name, mark};
}

function chooseCurrentPlayer(players) {
    const roll = Math.floor(Math.random() * 2);
    return players[roll];
}

function swapCurrentPlayer(players) {
    players.currentPlayer = 
        players.currentPlayer === players.player[0] ? 
        players.player[1] : players.player[0];
}


export function createPlayers() {
    const player1 = createPlayer("player1", "X");
    const player2 = createPlayer("player2", "O");
    const players = [player1, player2];
    let currentPlayer = chooseCurrentPlayer(players);
    return {
        players,
        currentPlayer
    }
}
