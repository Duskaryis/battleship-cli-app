const readlineSync = require("readline-sync");
const { printBoard, setUpBoard } = require("./board");

function greetUser() {
	console.log("🚢  Welcome to BattleShip! 🚢");
	if (readlineSync.keyInYN("Would you want to play?")) {
		setUpBoard();
	} else {
		console.log("Okay! Maybe another time then!");
	}
}

greetUser();
