/*Regex Series: Even Number?
Write a regular expression that matches only an even number. Numbers will be presented as strings.
Examples
"2341" ➞ false
"132" ➞ true
"29" ➞ false
"5578" ➞ true
Notes
This challenge is designed for RegEx only.*/
function regexSeries(str){
    if(parseInt(str[str.length-1])%2===0){
        return true;
    }
    else{
        return false;
    }
}
console.log(regexSeries("5578"));