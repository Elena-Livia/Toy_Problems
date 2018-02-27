// This time no story, no theory. The examples below show you what do you need, write a function to accomplich that
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

    function accum(input){
        //your code is here
        var accOutput = [];
        var counter = 0;
        for(var i=0; i<input.length; i++) {
        	counter ++

        	accOutput.push(input[i].repeat(counter));

        }
        return accOutput.toString();
    }