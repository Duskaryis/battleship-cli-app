function createGrid(size) {
	const grid = {};
	for (let i = 0; i < size; i++) {
		const rowLabel = String.fromCharCode(65 + i);
		grid[rowLabel] = Array(size).fill("-");
	}
	return grid;
}

const board = createGrid(5);

console.table(board);
