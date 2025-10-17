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
    let array_of_string=[];
    let array_of_string_without_vowel=[];
    for(let i=0;i<string_with_vowel.length;i++){
        array_of_string.push(string_with_vowel[i]);
    }
    //console.log(array_of_string)
    for(let i=0;i<array_of_string.length;i++){
        if(string_with_vowel[i]==="a"){
            array_of_string.splice(i,1);
        }
        else if(string_with_vowel[i]==="e"){
            array_of_string.splice(i,1);
        }
        else if(string_with_vowel[i]==="o"){
            array_of_string.splice(i,1);
        }
        else if(string_with_vowel[i]==="i"){
            array_of_string.splice(i,1);
        }
        else if(string_with_vowel[i]==="u"){
            array_of_string.splice(i,1);
        }
        else if(string_with_vowel[i]==="A"){
            array_of_string.splice(i,1);
        }
        else if(string_with_vowel[i]==="E"){
            array_of_string.splice(i,1);
        }
        else if(string_with_vowel[i]==="I"){
            array_of_string.splice(i,1);
        }
        else if(string_with_vowel[i]==="O"){
            array_of_string.splice(i,1);
        }
        else if(string_with_vowel[i]==="U"){
            array_of_string.splice(i,1);
        }
    }
    console.log(array_of_string);
    return array_of_string.toString().replaceAll(",","");
}
console.log(stringAfterRemovingVowel(string_with_vowel));