/*Remove Every Vowel from a String
Create a function that takes a string and returns a new string with all vowels removed.
Examples
removeVowels("I have never seen a thin person drinking Diet Coke.")
➞ " hv nvr sn  thn prsn drnkng Dt Ck."
removeVowels("We're gonna build a wall!")
➞ "W'r gnn bld  wll!"
removeVowels("Happy Thanksgiving to all--even the haters and losers!")
➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"
Notes
"y" is not considered a vowel.*/ 
let string_with_vowel="I have never seen a thin person drinking Diet Coke.";
function stringAfterRemovingVowel(string_with_vowel){
    let vowel_removed_string;
    for(let i=0;i<string_with_vowel.length;i++){
        if((string_with_vowel[i]==="a")||(string_with_vowel[i]==="A")){
            vowel_removed_string=string_with_vowel.replaceAll(string_with_vowel[i],"");
        }
        else if((string_with_vowel[i]==="e")||(string_with_vowel[i]==="E")){
            vowel_removed_string=string_with_vowel.replaceAll(string_with_vowel[i],"");
        }
        else if((string_with_vowel[i]==="o")||(string_with_vowel[i]==="O")){
            vowel_removed_string=string_with_vowel.replaceAll(string_with_vowel[i],"");
        }
        else if((string_with_vowel[i]==="i")||(string_with_vowel[i]==="I")){
            vowel_removed_string=string_with_vowel.replaceAll(string_with_vowel[i],"");
        }
        else if((string_with_vowel[i]==="u")||(string_with_vowel[i]==="U")){
            vowel_removed_string=string_with_vowel.replaceAll(string_with_vowel[i],"");
        }
    }
    return vowel_removed_string;
}
console.log(stringAfterRemovingVowel(string_with_vowel));