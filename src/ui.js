export function bindPlayersForm(handler) {
    const form = document.querySelector("#player-form");
    const board = document.querySelector(".board");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const player1 = form.elements.player1.value || "player 1";      
        const player2 = form.elements.player2.value || "player 2";
        form.classList.add("hidden");
        board.classList.remove("hidden");
        handler(player1, player2);
    });
}

export function bindTileClick(handler) {
    const board = document.querySelector(".board");
    board.addEventListener("click", (e) => {
        if (e.target.classList.contains("tile")) {
            const index = Number(e.target.id);
            handler(index);
        }
    });
}

export function bindPlayClick(handler) {
    const button = document.querySelector("#play-again");
    button.addEventListener("click", () => {
        handler();
    })
}

function displayWinner(game) {
    const winner = document.querySelector(".winner");
    if (game.status === game.draw) {
        winner.textContent = "It's a draw";
    } else {
        winner.textContent = `${game.status} wins`;
    }
}

export function updateUI(index, board, game) {
    const tiles = document.querySelectorAll(".tile");
    tiles[index].textContent = board.board[index];
    if (game.end === true) {
        displayWinner(game);
        showPlayAgain();
    }
}

export function clearUI() {
    const tiles = document.querySelectorAll(".tile");
    const winner = document.querySelector(".winner");
    const button = document.querySelector("#play-again");
    for (let tile of tiles) {
        tile.textContent = "";
    }
    winner.textContent = "";
    button.classList.add("hidden");
}

export function showPlayAgain() {
    const button = document.querySelector("#play-again");
    button.classList.remove("hidden");
}