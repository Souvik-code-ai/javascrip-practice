/*
What's Hiding Amongst the Crowd?
A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
The wanted word is in lowercase.
The crowd of letters is all in uppercase.
Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
Examples
detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"*/
function createLowercseStringFromStringOfLetters(string){
    var array_of_Lowercase_Char=[];
    for(let i=0;i<string.length;i++){
        if(string[i]===string[i].toLowerCase()){
            array_of_Lowercase_Char.push(string[i]);

        }
    }
    var string_of_Lowercase_Char=array_of_Lowercase_Char.toString();
    return string_of_Lowercase_Char.replaceAll(",","");
}
console.log(createLowercseStringFromStringOfLetters("UcUNFYGaFYFYGtNUH")); 