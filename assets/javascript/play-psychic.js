var guesses=[];
var reset=false;


//listen for event onkeydown
window.onkeydown = function(event) {
	// TODO: When the game is over, set reset=true
	if (reset) {
		guesses = []

		reset = false;
	}
    else {
    	// Check if usersChoice already exists in guesses...
    	// Hint: indexOf
	 	guesses.push(usersChoice);
		console.log(guesses);
		
		//possible user choices
		var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

		//force pssible user choice to lowercase
		var usersChoice = event.key.toLowerCase();


		//first conditional check to see if user choose from possible choices
		if(choices.indexOf(usersChoice) > -1) {

			//generate a random letter
			var computersChoice = Math.floor(Math.random() * choices.length);

			if(usersChoice !== computersChoice) {

				//display users guess
				var userGuess = document.getElementById("user-guess");

				// document.onkeyup = function() {
				// 	userGuess.textContent = guesses;
				// }


			}


		}
	}
}













































}