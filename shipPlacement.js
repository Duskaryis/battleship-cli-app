const readlineSync = require("readline-sync");

const smallShip = "🟠";
const largeShip = "🔵";
const miss = "❗";

function canPlaceShip(board, startRow, startCol, size, orientation) {
	for (let i = 0; i < size; i++) {
		const cell =
			orientation === 0
				? board[startRow][startCol + i]
				: board[startRow + i][startCol];
		if (!cell || cell.type !== "empty") {
			return false;
		}
	}
	return true;
}

function placeShip(board, startRow, startCol, size, orientation, symbol) {
	for (let i = 0; i < size; i++) {
		if (orientation === 0) {
			board[startRow][startCol + i] = { type: "ship", id: symbol };
		} else {
			board[startRow + i][startCol] = { type: "ship", id: symbol };
		}
	}
}

function computerPlacement(board) {
	const ships = [
		{ id: "largeShip", size: 3, symbol: "🔵" },
		{ id: "smallShip", size: 2, symbol: "🟠" },
	];

	for (const ship of ships) {
		let placed = false;

		while (!placed) {
			const orientation = Math.floor(Math.random() * 2);
			let startRow, startCol;
			if (orientation === 0) {
				// Horizontal
				startRow = Math.floor(Math.random() * board.length);
				startCol = Math.floor(
					Math.random() * (board[0].length - ship.size + 1)
				);
			} else {
				// Vertical
				startRow = Math.floor(Math.random() * (board.length - ship.size + 1));
				startCol = Math.floor(Math.random() * board[0].length);
			}

			if (canPlaceShip(board, startRow, startCol, ship.size, orientation)) {
				placeShip(
					board,
					startRow,
					startCol,
					ship.size,
					orientation,
					ship.symbol
				);
				placed = true;
			}
		}
	}
}

function playerPlacement(board) {
	const ships = [
		{ id: "largeShip", size: 3, symbol: "🔵" },
		{ id: "smallShip", size: 2, symbol: "🟠" },
	];

	for (const ship of ships) {
		let placed = false;

		while (!placed) {
			const position = readlineSync
				.question(
					`Where would you like to place your ${ship.size}-cell ship? (e.g., A1): `
				)
				.toUpperCase();

			const startRow = position.charCodeAt(0) - 65;
			const startCol = parseInt(position[1], 10) - 1;

			const orientation = readlineSync.keyInSelect(
				["Horizontal", "Vertical"],
				`Select orientation for your ${ship.size}-cell ship: `
			);
			if (orientation === -1) return;

			if (canPlaceShip(board, startRow, startCol, ship.size, orientation)) {
				placeShip(
					board,
					startRow,
					startCol,
					ship.size,
					orientation,
					ship.symbol
				);
				placed = true;
				console.log(
					`Your ${ship.size}-cell ship has been placed at ${position}.`
				);
			} else {
				console.log("Invalid placement. Please try again.");
			}
		}
	}
}

module.exports = { computerPlacement, playerPlacement };
