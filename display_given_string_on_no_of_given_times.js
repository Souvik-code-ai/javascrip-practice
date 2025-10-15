/*Recursion to Repeat a String n Number of Times
Create a recursive function that takes two parameters and repeats the string n number of times. The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.
String.prototype.repeat() is not allowed
Examples
repetition("ab", 3) ➞ "ababab"
repetition("kiwi", 1) ➞ "kiwi"
repetition("cherry", 2) ➞ "cherrycherry"
Notes
The second parameter of the function is positive integer.*/
function repeatString(string,n){
    let lengthString=string.length;
    let repeated_string_array=[];
    if(n<1){
        return ;
    }
    else if(n>=1){
        for(i=0;i<n;i++){
            repeated_string_array.push(string);
        }
    }
    let repeated_string=repeated_string_array.toString();
    return repeated_string.replaceAll(",","");
}
console.log(repeatString("souvik",3));