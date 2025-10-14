/*Count Instances of a Character in a String
Create a function that takes two strings as arguments and returns the number of times the first string (the single character) 
is found in the second string.
Examples
charCount("a", "edabit") ➞ 1
charCount("c", "Chamber of secrets") ➞ 1
charCount("b", "big fat bubble") ➞ 4
Notes
Your output must be case-sensitive (see second example).*/
function noOfRepeatationOfFirstStringIntoSecondString(string_1, string_2) {
    let count=0;
    if (string_1.length === 1) {
        for (let i = 0; i < string_2.length; i++) {
            if(string_1[0]===string_2[i]){
                count++;
            }

        }

    }
    return count;
}
console.log(noOfRepeatationOfFirstStringIntoSecondString("b","big fat bubble"));