const readlineSync = require("readline-sync");

function printBoard(board, debug) {
	const displayBoard = {};

	for (let row = 0; row < board.length; row++) {
		const rowLabel = String.fromCharCode(65 + row);
		displayBoard[rowLabel] = [];

		for (let col = 0; col < board[row].length; col++) {
			const cell = board[row][col];
			if (debug) {
				displayBoard[rowLabel].push(cell.type === "empty" ? "-" : cell.id);
			} else {
				if (cell.hit) {
					displayBoard[rowLabel].push(cell.type === "empty" ? "❗" : "🟠");
				} else {
					displayBoard[rowLabel].push("-");
				}
			}
		}
	}
	console.table(displayBoard);
}

function initializeBoard(rows, cols) {
	const board = [];
	for (let row = 0; row < rows; row++) {
		const boardRow = [];
		for (let col = 0; col < cols; col++) {
			boardRow.push({ type: "empty", hit: false }); // Initialize empty cells
		}
		board.push(boardRow);
	}
	return board;
}

module.exports = { printBoard, initializeBoard };
