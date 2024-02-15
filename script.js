document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const result = document.getElementById('result');
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    // Create the Tic Tac Toe board
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.setAttribute('data-index', i);
        cell.addEventListener('click', () => handleCellClick(i));
        board.appendChild(cell);
    }

    // Handle cell click
    const handleCellClick = (index) => {
        if (gameBoard[index] === '' && gameActive) {
            gameBoard[index] = currentPlayer;
            renderBoard();
            checkWinner();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    };

    // Render the Tic Tac Toe board
    const renderBoard = () => {
        board.childNodes.forEach((cell, index) => {
            cell.textContent = gameBoard[index];
        });
    };

    // Check for a winner or a tie
    const checkWinner = () => {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                result.textContent = `Player ${gameBoard[a]} wins!`;
                gameActive = false;
                return;
            }
        }

        if (!gameBoard.includes('')) {
            result.textContent = "It's a tie!";
            gameActive = false;
        }
    };
});
