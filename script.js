document.addEventListener("DOMContentLoaded", function () {
  const boardContainer = document.getElementById("sudoku-board");

  function createSudokuBoard() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const cell = document.createElement("div");
        cell.classList.add("sudoku-cell");
        boardContainer.appendChild(cell);
      }
    }
  }

  function generateRandomPuzzle() {
    const cellsToFill = 20;
    const cells = document.querySelectorAll(".sudoku-cell");

    for (let i = 0; i < cellsToFill; i++) {
      const randomIndex = Math.floor(Math.random() * 81);
      cells[randomIndex].textContent = Math.floor(Math.random() * 9) + 1;
      cells[randomIndex].classList.add("initial-cell");
    }
  }

  createSudokuBoard();
  generateRandomPuzzle();
});

function solveSudoku() {
  // Implement your own Sudoku solving algorithm
  alert("Sudoku solving logic will be implemented here.");
}
