const DOM = {
    form: document.querySelector("#player-form"),
    board: document.querySelector(".board"),
    tiles: document.querySelectorAll(".tile"),
    button: document.querySelector("#play-again"),
    message: document.querySelector(".message"),
    score: document.querySelector(".score")
}

export function bindPlayersForm(handler) {
    DOM.form.addEventListener("submit", (e) => {
        e.preventDefault();
        const player1 = DOM.form.elements.player1.value || "player 1";      
        const player2 = DOM.form.elements.player2.value || "player 2";
        DOM.form.classList.add("hidden");
        DOM.board.classList.remove("hidden");
        handler(player1, player2);
    });
}

export function bindTileClick(handler) {
    DOM.board.addEventListener("click", (e) => {
        if (e.target.classList.contains("tile")) {
            const index = Number(e.target.id);
            handler(index);
        }
    });
}

export function bindPlayClick(handler) {
    DOM.button.addEventListener("click", () => {
        handler();
    })
}

function displayWinner(game) {
    if (game.status === game.draw) {
        DOM.message.textContent = "It's a draw";
    } else {
        DOM.message.textContent = `${game.status} wins`;
    }
}

export function updateUI(index, board, game, players) {
    DOM.tiles[index].textContent = board.board[index];
    displayCurrentPlayer(players);
    if (game.end === true) {
        highlightCombo(game);
        displayWinner(game);
        showPlayAgain();
        displayScore(players);
    }
}

function highlightCombo(game) {
    if (game.combo == null) return;
    for (let i = 0; i < game.combo.length; i++) {
        DOM.tiles[game.combo[i]].classList.add("highlight");
    }
}

function removeHighlight() {
    for (let i = 0; i < DOM.tiles.length; i++) {
        DOM.tiles[i].classList.remove("highlight");
    }
}

export function clearUI() {
    for (let tile of DOM.tiles) {
        tile.textContent = "";
    }
    removeHighlight();
    DOM.button.classList.add("hidden");
}

export function showPlayAgain() {
    DOM.button.classList.remove("hidden");
}

export function displayCurrentPlayer(players) {
    DOM.message.textContent = `${players.currentPlayer.name}'s turn`;
}

export function displayScore(players) {
    DOM.score.textContent =
        `${players.players[0].name}: ${players.players[0].score}` +
        `${players.players[1].name}: ${players.players[1].score}`  
}