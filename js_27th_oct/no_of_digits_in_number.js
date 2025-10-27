// Find Number of Digits in Number
// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

// Examples
// num_of_digits(1000) ➞ 4

// num_of_digits(12) ➞ 2

// num_of_digits(1305981031) ➞ 10

// num_of_digits(0) ➞ 1
// Notes
// Try to solve this challenge without using strings!
function findNumberOfDigitsInNumber(num){
    let num_without_negative=Math.abs(num);
    console.log(num_without_negative);
    let count=0;
    while(num_without_negative>0){
        num_without_negative=Math.floor(num_without_negative/10);
        count++;

    }
    return count;
}
console.log(findNumberOfDigitsInNumber(1305981031));
//Time complexity:O(n)
//Space-Complexity:O(1)
