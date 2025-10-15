/*Is the Average of All Elements a Whole Number?
Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.
Examples
isAvgWhole([1, 3]) ➞ true
isAvgWhole([1, 2, 3, 4]) ➞ false
isAvgWhole([1, 5, 6]) ➞ true
isAvgWhole([1, 1, 1]) ➞ true
isAvgWhole([9, 2, 2, 5]) ➞ false
Notes
N/A*/
let array=[1,3]; 
function ifAverageIsWholeNumber(array){
    let sum;
    sum=array.reduce((prev,curr)=>{
        return prev+curr;
    }) ;
    let avg=sum/array.length;
    if(avg%2===0){
        return true;
    }
    else if(avg%2!==0){
        return false;
    }

}
console.log(ifAverageIsWholeNumber(array));