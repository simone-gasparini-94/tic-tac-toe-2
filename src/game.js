import { swapCurrentPlayer } from "./players.js";

export function createGame() {
    let draw = "draw";
    let end = false;
    let status = null;
    return {
        end,
        draw,
        status,
    }
}

function placeTile(board, currentPlayer, index) {
    if (index < 0 || index >= board.BOARD_TILES) {
        return ;
    }
    board.board[index] = currentPlayer.mark;
}

function checkWin(game, board, currentPlayer) {
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let combo of winCombos) {
        let i = 0;
        while (i < combo.length) {
            if (board.board[combo[i]] != currentPlayer.mark) {
                break ;
            }
            i++;
        }
        if (i === combo.length) {
            game.end = true;
            game.status = currentPlayer.name;
            return ;
        }
    }
}

function checkDraw(game, board) {
    const emptyTiles = board.board.filter((tile) =>
        tile === board.emptyTile);
    if (emptyTiles.length === 0) {
        game.end = true;
        game.status = game.draw;
    }
}

function checkEnd(game, board, currentPlayer) {
    checkWin(game, board, currentPlayer);
    if (game.end === false) {
        checkDraw(game, board);
    }
}

function generateRandomTileIndex(board) {
    const arr = board.board;
    let freeTilesIndexes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === board.emptyTile) {
            freeTilesIndexes.push(i);
        }
    }
    const index = Math.floor(Math.random() * freeTilesIndexes.length);
    return (freeTilesIndexes[index]);
}

export function playRound(game, board, players) {
    const index = generateRandomTileIndex(board);
    placeTile(board, players.currentPlayer, index);
    checkEnd(game, board, players.currentPlayer);
    swapCurrentPlayer(players);
}