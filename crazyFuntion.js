/*Come Check Out This Crazy Function
You are given two numbers, a and b. Write a function which uses an expression to return the expected output. I am not going to tell you what the expression is because that will spoil the fun! :)
Examples
crazyfunction(10, 20) ➞ 30
crazyfunction(17, 35) ➞ 50
crazyfunction(61, 233) ➞ 212
Notes
Hint: Notice the tags?*/
function crazyfunction(a,b){
    let result;
    result=(a^b);
    return result;
}
console.log(crazyfunction(61,233));