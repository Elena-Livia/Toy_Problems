	// 1-create a data model to represent some of your classmates
	// 	-think of different attributes of your classmates? what do all of them have ?
	// 	-create a factory function.
	// 	-create an array to hold the classmates that you have created.
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.


var classmate0 = {
	name: "Livia",
	age: 28,
	nationality:"Romanian"

};

var classmate1 = {
	name: "Alik",
	age: 24,
	nationality: "Jordanian"

};

var classmate2 = {
	name: "Mais",
	age: 31,
	nationality: "Jordanian"

};


function factClassmates(name,age,nationality) {
  return {
    name: name,
    age: age,
    nationality: nationality
  };
}


var arrayClassmates = [classmate0, classmate1, classmate2];

function displayFriend(classmate){
	return {
     classmate.name + ", " + classmate.age + ", " + classmate.nationality;
	}
}

function addFriend(classmate){
	return {
		arrayClassmates.push(classmate);
	}
}

