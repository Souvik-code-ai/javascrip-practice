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
function indexOfFirstVowelFromString(string){
    for(let i=0;i<string.length;i++){
        if(string[i]==="a"){
            return i;
        }
        if(string[i]==="e"){
            return i;
        }
        if(string[i]==="i"){
            return i;
        }
        if(string[i]==="o"){
            return i;
        }
        if(string[i]==="u"){
            return i;
        }
        if(string[i]==="A"){
            return i;
        }
        if(string[i]==="E"){
            return i;
        }
        if(string[i]==="I"){
            return i;
        }
        if(string[i]==="O"){
            return i;
        }
        if(string[i]==="U"){
            return i;
        }
    }
}
console.log(indexOfFirstVowelFromString("Aouvik"));