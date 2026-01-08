function createPlayer(name, mark) {
    return {name, mark};
}

function chooseCurrentPlayer(players) {
    const roll = Math.floor(Math.random() * 2);
    return players[roll];
}

export function swapCurrentPlayer(players) {
    players.currentPlayer = 
        players.currentPlayer === players.players[0] ? 
        players.players[1] : players.players[0];
}

export function createPlayers(p1, p2) {
    const player1 = createPlayer(p1, "X");
    const player2 = createPlayer(p2, "O");
    const players = [player1, player2];
    let currentPlayer = chooseCurrentPlayer(players);
    return {
        players,
        currentPlayer
    }
}
