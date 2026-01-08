import { createBoard, displayBoard } from "./board.js";
import { createPlayers } from "./players.js";
import { createGame, playRound } from "./game.js";

function main() {
    const board = createBoard();
    const players = createPlayers();
    const game = createGame();
    displayBoard(board);
    while (game.end === false) {
        playRound(game, board, players);
        displayBoard(board);
    }
    console.log(`${game.status}`);
}

main();