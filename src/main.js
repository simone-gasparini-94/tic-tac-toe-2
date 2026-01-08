import { createBoard, displayBoard } from "./board.js";
import { createPlayers } from "./players.js";
import { playRound } from "./game.js";

function main() {
    const board = createBoard();
    const players = createPlayers();
    displayBoard(board);
    playRound(board, players);
    displayBoard(board);
}

main();