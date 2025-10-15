/*How Many Vowels?
Create a function that takes a string and returns the number (count) of vowels contained within it.
Examples
countVowels("Celebration") ➞ 5
countVowels("Palm") ➞ 1
countVowels("Prediction") ➞ 4
Notes
a, e, i, o, u are considered vowels (not y).
All test cases are one word and only contain letters.*/ 
function noOfVowelsInString(string){
    let count=0;
    for(let i=0;i<string.length;i++){
        for(let j=0;j<10;j++){
            if(string[i]===j.toString()){
                return;
            }
        }
    }
    for(let i=0;i<string.length;i++){
        if(string[i]==="a"){
            count++;
        }
        else if(string[i]==="e"){
            count++;
        }
        else if(string[i]==="i"){
            count++;
        }
        else if(string[i]==="o"){
            count++;
        }
        else if(string[i]==="u"){
            count++;
        }
    }
    return count;

}
console.log(noOfVowelsInString("palm"));