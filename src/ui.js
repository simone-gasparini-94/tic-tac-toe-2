export function bindEvent(handler) {
    const $board = document.querySelector(".board");
    $board.addEventListener("click", (e) => {
        if (e.target.className === "tile") {
            const index = Number(e.target.id);
            handler(index);
        }
    });
}

function displayWinner(game) {
    const $winner = document.querySelector(".winner");
    if (game.status === game.draw) {
        $winner.textContent = "It's a draw";
    } else {
        $winner.textContent = `${game.status} wins`;
    }
}

export function updateUI(index, board, game) {
    const $tiles = document.querySelectorAll(".tile");
    $tiles[index].textContent = board.board[index];
    if (game.end === true) {
        displayWinner(game);
    }
}