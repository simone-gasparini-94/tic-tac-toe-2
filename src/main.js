import { createBoard} from "./board.js";
import { createPlayers } from "./players.js";
import { createGame, playRound } from "./game.js";
import { bindEvent, updateUI } from "./ui.js";

function main() {
    const board = createBoard();
    const players = createPlayers();
    const game = createGame();
    bindEvent((index) => {
        if (game.end === false) {
            playRound(index, game, board, players);
            updateUI(index, board, game);
        }
    });
}

main();