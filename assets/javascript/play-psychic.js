
var guesses=[];
var guessedLetter=[];
var reset=false;
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

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
			var computersChoice = Math.floor(Math.random() * choices.length);

			//display users guess
			var userGuess = document.getElementById("user-guess");

			document.onkeyup = function() {
			userGuess.textContent = guesses;
			}

			if(usersChoice !== computersChoice) {


			}
	 	}
	 
}

