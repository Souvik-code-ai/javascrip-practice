/*Return the Index of the First Vowel
Create a function that returns the index of the first vowel in a string.

Examples
firstVowel("apple") ➞ 0

firstVowel("hello") ➞ 1

firstVowel("STRAWBERRY") ➞ 3

firstVowel("pInEaPPLe") ➞ 1
Notes
Input will be single words.
Characters in words will be upper or lower case.
"y" is not considered a vowel.
Input always contains a vowel.*/
let vowel_array=["a","e","i","o","u","A","E","I","O","U"];
function returnIndexOfFirstVowel(str){
    for(let i=0;i<str.length;i++){
        for(let j=0;j<vowel_array.length;j++){
            if(vowel_array[j]===str[i]){
                return i;
            }
        }
    }
}
console.log(returnIndexOfFirstVowel("pInEaPPLe"));