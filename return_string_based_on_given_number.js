/*Say "Hello" Say "Bye"
Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.

Examples
sayHelloBye("alon", 1) ➞ "Hello Alon"

sayHelloBye("Tomi", 0) ➞ "Bye Tomi"

sayHelloBye("jose", 0) ➞ "Bye Jose"
Notes
The name you return must be capitalized.*/
function returnString(str,num){
    if(num===0){
        return "Hello"+" "+str[0].toUpperCase()+str.slice(1,str.length);
    }
    else if(num==1){
        return "Hello"+" "+str[0].toUpperCase()+str.slice(1,str.length);

    }
}
console.log(returnString("alon",1));