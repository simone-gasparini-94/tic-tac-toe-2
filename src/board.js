export function createBoard() {
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

export function displayBoard(board) {
    for (let i = 0; i < board.BOARD_TILES; i += 3) {
        console.log(
            board.board[i],
            board.board[i + 1],
            board.board[i + 2]
        );
    }
}