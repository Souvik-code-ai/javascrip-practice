/*Capitalize by ASCII
Create a function that takes a string as input and capitalizes a letter if its ASCII code is even and returns its lower case version if its ASCII code is odd.
Examples
asciiCapitalize("to be or not to be!") ➞ "To Be oR NoT To Be!"
asciiCapitalize("THE LITTLE MERMAID") ➞ "THe LiTTLe meRmaiD"
asciiCapitalize("Oh what a beautiful morning.") ➞ "oH wHaT a BeauTiFuL moRNiNg."*/
let str="to be or not to be!";
function uppercaseLowercaseBasedOnAsciiValue(str){
    let new_str="";
    for(let i=0;i<str.length;i++){
        if((str.charCodeAt(i))%2===0){
            new_str+=str[i].toUpperCase();
        }
        else if((str.charCodeAt(i))%2!==0){
            new_str+=str[i].toLowerCase();
        }
        else {
            new_str+=str[i];
        }
    }
    return new_str;
}
console.log(uppercaseLowercaseBasedOnAsciiValue(str));