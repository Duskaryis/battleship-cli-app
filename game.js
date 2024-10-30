const readlineSync = require("readline-sync");
const { printBoard, initializeBoard } = require("./board");
const { computerPlacement, playerPlacement } = require("./shipPlacement");

function greetUser() {
	console.log("🚢  Welcome to BattleShip! 🚢");
	if (readlineSync.keyInYN("Would you want to play?")) {
		startGame();
	} else {
		console.log("Okay! Maybe another time then!");
	}
}

greetUser();

function startGame() {
	const boardSizeOptions = ["4X4", "5X5", "6X6"];
	const boardChoice = readlineSync.keyInSelect(
		boardSizeOptions,
		"Choose a board size: "
	);
	if (boardChoice === -1) {
		console.log("Set up canceled. Exiting...");
	}
	const boardSize = boardSizeOptions[boardChoice].split("x").map(Number);
	const board = initializeBoard(boardSize[0], boardSize[1]);
	startGame(printBoard);
}
