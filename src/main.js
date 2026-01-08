import { createBoard} from "./board.js";
import { createPlayers } from "./players.js";
import { createGame, playRound } from "./game.js";
import { bindPlayersForm, bindTileClick, updateUI } from "./ui.js";

function main() {
    const board = createBoard();
    const game = createGame();
    let players;
    bindPlayersForm((player1, player2) => {
        players = createPlayers(player1, player2);
    });
    bindTileClick((index) => {
        if (game.end === false) {
            playRound(index, game, board, players);
            updateUI(index, board, game);
        }
    });
}

main();