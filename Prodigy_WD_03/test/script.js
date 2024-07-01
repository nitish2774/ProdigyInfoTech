let gameBoard = [];
let currentPlayer = "X";
let gameOver = false;

// Initialize game board
for (let i = 0; i < 9; i++) {
    gameBoard.push("");
    document.getElementById(cell-${i}).addEventListener("click", handleCellClick);
}

// Handle cell click
function handleCellClick(event) {
    if (gameOver) return;
    const cellIndex = event.target.id.split("-")[1];
    if (gameBoard[cellIndex] === "") {
        gameBoard[cellIndex] = currentPlayer;
        event.target.textContent = currentPlayer;
        checkWinningCondition();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

// Check winning condition
function checkWinningCondition() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let combination of winningCombinations) {
        if (gameBoard[combination[0]] === gameBoard[combination[1]] && gameBoard[combination[1]] === gameBoard[combination[2]] && gameBoard[combination[0]] !== "") {
            alert(Player ${gameBoard[combination[0]]} wins!);
            gameOver = true;
            return;
        }
    }
    if (!gameBoard.includes("")) {
        alert("It's a draw!");
        gameOver = true;
    }
}

// Reset game
document.getElementById("reset-button").addEventListener("click", resetGame);

function resetGame() {
    gameBoard = [];
    currentPlayer = "X";
    gameOver = false;
    for (let i = 0; i < 9; i++) {
        document.getElementById(cell-${i}).textContent = "";
        gameBoard.push("");
    }
}



//js
