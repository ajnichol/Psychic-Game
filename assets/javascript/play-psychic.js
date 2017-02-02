
var guesses=[];
var guessedLetter=[];
var reset=false;
var maxGuesses= 10;
document.getElementById("maxGuess").innerHTML = maxGuesses;
var wins= 0;
document.getElementById("wins");
var losses= 0;
document.getElementById("losses");
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function startOver() {

	guessedLetter=[];
	guesses=[];
	maxGuesses=10;
	computerIndex= Math.floor(Math.random() * choices.length);
	computersChoice= choices[computerIndex];
}

//listen for event onkeydown
window.onkeydown = function(event) {

	//force possible user choice to lowercase
    	var usersChoice = event.key.toLowerCase();

    	//first conditional check to see if user already choose from possible choices
		if(guesses.indexOf(usersChoice) > -1) {

			console.log("pressed more than once");

		}
	 	else {

	 		guesses.push(usersChoice);
	 		console.log("first press");

		 	//generate a random letter
			var computerIndex = Math.floor(Math.random() * choices.length);

			var computersChoice = choices[computerIndex];

			//display users guess
			var userGuess = document.getElementById("user-guess");

			userGuess.textContent = guesses;
			

			if(usersChoice !== computersChoice) {
				
				maxGuesses--;
				document.getElementById("maxGuess").innerHTML = maxGuesses;

			}
			else {

				wins++;
				document.getElementById("wins").innerHTML = wins;
				startOver();
			}

			if(maxGuesses < 1) {

				losses++;
				document.getElementById("losses").innerHTML = losses;
				startOver();
			}


			
	 	}
	 

}

