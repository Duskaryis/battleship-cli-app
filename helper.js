const readlineSync = require("readline-sync");

function greetUser() {
	console.log("Welcome to BattleShip!");
	readlineSync.keyInYN("Would you want to play?");
}

greetUser();
