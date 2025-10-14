/*Repeating Letters
Create a function that takes a string and returns a string in which each character is repeated once.
Examples
doubleChar("String") ➞ "SSttrriinngg"
doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"
doubleChar("1234!_ ") ➞ "11223344!!__  "
Notes
All test cases contain valid strings. Don't worry about spaces, special characters or numbers. 
They're all considered valid characters.*/
function repeatCharacterFromString(string){
    let string_array=[];
    for(let i=0;i<string.length;i++){
        string_array.push(string[i]);
    }
    let new_string_array=[];
    for(let i=0;i<((string_array.length)*2);i++){
        new_string_array.push(string_array[i]);
        new_string_array.push(string_array[i]);
    }
    let new_string=new_string_array.toString();
    return new_string.replaceAll(",","");

}
console.log(repeatCharacterFromString("Hello World!"));