import { createBoard, clearBoard } from "./board.js";
import { chooseCurrentPlayer, createPlayers } from "./players.js";
import { createGame, playRound, resetGame } from "./game.js";
import {
    bindPlayersForm,
    bindTileClick,
    bindPlayClick,
    updateUI,
    clearUI,
    displayCurrentPlayer
} from "./ui.js";

function main() {
    const board = createBoard();
    const game = createGame();
    let players;
    bindPlayersForm((player1, player2) => {
        players = createPlayers(player1, player2);
        displayCurrentPlayer(players);
    });
    bindTileClick((index) => {
        if (game.end === false) {
            playRound(index, game, board, players);
            updateUI(index, board, game, players);
        }
    });
    bindPlayClick(() => {
        clearBoard(board);
        resetGame(game);
        clearUI();
        players.currentPlayer = chooseCurrentPlayer(players.players);
        displayCurrentPlayer(players);
    });
}

main();