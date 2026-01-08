function placeTile(board, currentPlayer, index) {
    index--;
    if (index < 0 || index >= board.BOARD_TILES) {
        return ;
    }
    board.board[index] = currentPlayer.mark;
}

export function playRound(board, players) {
    placeTile(board, players.currentPlayer, 2);
    
}