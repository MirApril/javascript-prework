function getMoveName(argMoveId) {
	if (argMoveId == 1) {
		return "kamień";
	} else if (argMoveId == 2) {
		return "papier";
	} else if (argMoveId == 3) {
		return "nożyce";
	}

	printMessage("Nie znam ruchu o id " + argMoveId + ".");
	return "nieznany ruch";
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
let playerMove = getMoveName(playerInput);
function displayResult(computerMove, playerMove) {
	printMessage("Mój ruch to: " + computerMove + ", a Twój: " + playerMove);

	if (computerMove == "kamień" && playerMove == "papier") {
		printMessage("Ty wygrywasz!");
	} else if (computerMove == "papier" && playerMove == "nożyce") {
		printMessage("Ty wygrywasz!");
	} else if (computerMove == "nożyce" && playerMove == "kamień") {
		printMessage("Ty wygrywasz!");
	} else if (computerMove == "kamień" && playerMove == "nożyce") {
		printMessage("Przegrałeś :(");
	} else if (computerMove == "papier" && playerMove == "kamień") {
		printMessage("Przegrałeś :(");
	} else if (computerMove == "nożyce" && playerMove == "papier") {
		printMessage("Przegrałeś :(");
	} else if (computerMove == "kamień" && playerMove == "kamień") {
		printMessage("Mamy remis :)");
	} else if (computerMove == "papier" && playerMove == "papier") {
		printMessage("Mamy remis :)");
	} else if (computerMove == "nożyce" && playerMove == "nożyce") {
		printMessage("Mamy remis :)");
	} else {
		printMessage("Tak się nie bawimy. -.-");
	}
}
displayResult(computerMove, playerMove);
