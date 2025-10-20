/*Adding Numbers in a String
Given a string of numbers separated by a comma and space, return the total sum of all the numbers.
Examples
addNums("2, 5, 1, 8, 4") ➞ 20
addNums("1, 2, 3, 4, 5, 6, 7") ➞ 28
addNums("10") ➞ 10
Notes
Numbers will always be separated by a comma and space.
Your function should accept negative numbers.*/
function addAllElementsOfString(str){
    let sum=0;
    for(let i=0;i<str.length;i=(i+3)){
        sum=sum+parseInt(str[i]);
    }
    return sum;
}
console.log(addAllElementsOfString("1, 2, 3, 4, 5, 6, 7"));
