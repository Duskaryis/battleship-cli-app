//const readlineSync = require("readline-sync");


const board = [
	[
		{ type: "large", id: 1, hit: false }, // Represents position A0
		{ type: "small", hit: false }, // Represents position A1
		{ type: "small", hit: false }, // Represents position A2
	],
	[
		{ type: "large", id: 1, hit: false }, // Represents position B0
		{ type: "empty", hit: false }, // Represents position B1
		{ type: "empty", hit: false }, // Represents position B2
	],
	[
		{ type: "large", id: 1, hit: false }, // Represents position C0
		{ type: "empty", hit: false }, // Represents position C1
		{ type: "empty", hit: false }, // Represents position C2
	],
];


// create array that represents the rows (outside)
// inputs: size(0, 1, 2); // => size is the dimensions of the board (3, 4, 5)
function createBoard(size) {
	// create array that represent the columns and add them to the outside array
	// create the column array
	const column = [];
	for(let i = 0; i < size; i++) {
		const row = [];
		for(let j = 0; j < size; j++) {
			const row.push({ type: "large", id: 1, hit: false })
			
		}
	}
	
}

// iterate and add objects (the number of times we iterate will be based on the size input)
// once the array is complete, we add it to the outside array and move on to the next col

// output: board(Array of Arrays containing objects)
//function printBoard() {};

console.table(board);
console.table(board0);
console.table(board1);
console.table(board2);
//nested array inside a grid
//module.exports = { printBoard };
