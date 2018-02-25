// Write a function called characPosit, when provided with a letter, return its position in the alphabet.
// 	Input :: "a"
// 	Ouput :: "Position of alphabet: 1"

	function characPosit(character){

		var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

		for(var i = 0; i<alphabet.length; i++) {

			if(character === alphabet[i]) {

				return "Position of alphabet: " + i;
			}
		}

	}

// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (n, s) {
		return 
				
	}