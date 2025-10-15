/*Highest Digit
Create a function that takes a number as an argument and returns the highest digit in that number.
Examples
highestDigit(379) ➞ 9
highestDigit(2) ➞ 2
highestDigit(377401) ➞ 7
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.*/
let array=[1,2,3,4,45]; 
function arrayOfEvenNumbersFromGivenArray(array){
    let array_of_even_numbers=[];
    for(let i=0;i<array.length;i++){
        if(array[i]%2==0){
            array_of_even_numbers.push(array[i]);
        }
    }
    return array_of_even_numbers;
}
console.log(arrayOfEvenNumbersFromGivenArray(array));