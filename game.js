const readlineSync = require("readline-sync");
const { printBoard, initializeBoard } = require("./board");
const { computerPlacement, playerPlacement } = require("./shipPlacement");

function greetUser() {
    console.log("🚢 Welcome to BattleShip! 🚢");
    if( readlineSync.keyInYN("Would you want to play?")) {
        setUpBoard();
    }
    else {
        console.log("Okay! Maybe another time then!")
    }
}

function setUpBoard() {
    const boardSizeOptions = ["4X4", "5X5", "6X6"];
    const boardChoice = readlineSync.keyInSelect(boardSizeOptions, "Choose a board size: ");
    const boardSize = boardSizeOptions[boardChoice].split("x").map(Number);
    startGame(boardSize);
}

function startGame() {
    const playerBoard = initializeBoard(boardSize, board);
    const computerBoard = initializeBoard(boardSize, board);
    console.log("The Boards are set, PREPARE FOR BATTLE!");
    printBoard(playerBoard, true);
    playerTurn(playerBoard, computerBoard);
}

function playerTurn() {
    let gameOver = false;
    while(!gameOver) {
        const playerGuess = readline.question("Make a guess! (eg. A1 or B2)");
        const guessResult =  processGuess(playerGuess, computerBoard);
        console.log(`Your guess: ${playerGuess} - ${guessResult ? "Hit!" : "Miss!" }`);

        const computerGuess = generateComputerGuess(playerBoard);
        const computerResult = processGuess(computerGuess, playerBoard);
        console.log(`Computer's guess: ${computerGuess} - ${computerResult ? "Hit!" : "Miss!"}`);
        
        printBoard(playerBoard);
        printBoard(computerBoard);

        gameOver = checkWinCondition(playerBoard, computerBoard);
    }
    console.log("Game Over! Thanks for playing!")
}

greetUser();
setUpBoard();
startGame();
playerTurn();