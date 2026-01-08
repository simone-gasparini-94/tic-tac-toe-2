import { createBoard, displayBoard } from "./board.js";
import { createPlayers } from "./players.js";

function main() {
    const board = createBoard();
    const players = createPlayers();
    displayBoard(board);
}

main();