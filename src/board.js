export function createBoard() {
    const emptyTile = "-";
    const BOARD_TILES = 9;
    const board = [];
    for (let i = 0; i < BOARD_TILES; i++) {
        board.push(emptyTile);
    }
    return {
        board,
        BOARD_TILES,
        emptyTile
    };
}

export function clearBoard(board) {
    for (let i = 0; i < board.board.length; i++) {
        board.board[i] = board.emptyTile;
    }
}