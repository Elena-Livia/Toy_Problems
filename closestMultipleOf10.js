 // Given a number return the closest number to it that is divisible by 10.
 // Example :
	// 22 ===> 20
	// 25 ===> 30
	// 37 ===> 40
 function closestMultipleOf10(num) {
 	var result;
 	if(num %10 ===0) {
 		result = num;
 	}else{
 	result = Math.round(num/10);
 	}
 	return result*10;
 }