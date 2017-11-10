//Possible CP picks
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z'"];

//Game status. Wins and losses set to 0 and guessesLeft set to 9
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = [];
var PCpick;


//Coputer chooses one letter from the avaliable choices
var index = Math.floor(Math.random() * options.length);
var PCpick = options[index];
console.log(PCpick);

//when activated this function will reset the game
function reset() {
	guessesLeft = 9;
	guessesMade = [];
	index = Math.floor(Math.random() * options.length);
	PCpick = options[index];
}

//this funciton runs when player presses a key
document.onkeyup = function(event) {
	//key pressed is lowercased and becomes a variable
	var lowerCaseLetter = event.key.toLowerCase();


	//If key pressed has not been pressed, let conditional run. If key pressed has been pressed, do nothing.
	if (guessesMade.indexOf(lowerCaseLetter) < 0 && event.keyCode > 65 && event.keyCode < 90){

		//if player guesses PCpick, player wins and game restarts
		if (lowerCaseLetter === PCpick) {	
			wins++;
			alert("I guess you are a psychic");
			reset();
		}

		//if player guesses wrong and has no guesses left, player loses and game restarts
		else {
			guessesLeft--;
			if (guessesLeft === 0) {
				losses++;
				reset();
				alert("You're probably not psychic, but feel free to try again");
			}
			//if player guesses wrong and still has guesses left, player's guesses left drop by one and letter is documented
			else{
				guessesLeft - 1;
				guessesMade.push(lowerCaseLetter);
			}
		}
	}
	//updates game status after function runs
	document.getElementById("wins").textContent = "Wins: " + wins;

	document.getElementById("losses").textContent = "Losses " + losses;

	document.getElementById("guessesLeft").textContent = "Guesses left: " + guessesLeft;

	document.getElementById("haveSaid").textContent = "Your guesses so far: " + guessesMade;

}