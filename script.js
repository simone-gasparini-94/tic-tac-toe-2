function createBoard() {
    const emptyTile = "-";
    const BOARD_TILES = 9;
    const board = [];
    for (let i = 0; i < BOARD_TILES; i++) {
        board.push(emptyTile);
    }
    return {
        board,
        BOARD_TILES
    };
}

function createPlayers() {
    const player1 = createPlayer("player1", "X");
    const player2 = createPlayer("player2", "O");
    const players = [player1, player2];
    let currentPlayer = chooseCurrentPlayer(players);
    return {
        players,
        currentPlayer
    }
}

function createPlayer(name, mark) {
    return {name, mark};
}

function chooseCurrentPlayer(players) {
    const roll = Math.floor(Math.random() * 2);
    return players[roll];
}

function displayBoard(b) {
    for (let i = 0; i < b.BOARD_TILES; i += 3) {
        console.log(b.board[i], b.board[i + 1], b.board[i + 2]);
    }
}

function main() {
    const board = createBoard();
    const players = createPlayers();
    displayBoard(board);
}

main();