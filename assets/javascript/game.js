//Possible CP picks
var options:Array = ("abcdefghijklmnopqrstuvwxyz").split("");

//Game status. Wins and losses set to 0 and guessesLeft set to 9
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = [];
var PCpick = null;

//Coputer chooses one letter from the avaliable choices.
var computerGuess = options[Math.floor(Math.random() * options.length)];

//Player begins with 9 lives.
function guessesRemaining() {
	document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var chosenLetter = function() {
  this.PCpick = this.options[Math.floor(Math.random() * this.options.length)];
};

//Attempted letter get displaid separated by a comma everytime.
function lettersSaid() {
	document.querySelector('#haveSaid').innerHTML = "Your guesses so far: " + guessedLetters.join(',');
};

//This function will be called to reset the game
function reset() {
	guessesLeft = 9;
	guessesMade = [];

	chosenLetter();
	guessesRemaining();
	lettersSaid();
}
	chosenLetter();
	guessesRemaining();

//this function will take place after the player lets go of a key
document.onkeyup = function(event) {
	//-- means decrement
	guessesLeft--;
	var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();

	guessesMade.push(playerGuess);
	guessesRemaining();
	lettersSaid();

		if (guessesLeft > 0) {
			if (playerGuess == PCpick) {
				wins++;
				document.querySelector('#wins').innerHTML = "Wins: " + wins;
				alert("Cool, you're a psychic");
				reset();
			}
		} else if (guessesLeft == 0) {
			losses++;
			document.querySelector('#losses').innerHTML = "Losses: " + losses;
			alert("You're probably not psychic, but feel free to try again");
			reset();
		}
};