/*Sort Numbers in Ascending Order
Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).
Sort numbers array in ascending order.
If the function's argument is null, an empty array, or undefined; return an empty array.
Return a new array of sorted numbers.
Examples
sortNumsAscending([1, 2, 10, 50, 5]) ➞ [1, 2, 5, 10, 50]
sortNumsAscending([80, 29, 4, -95, -24, 85]) ➞ [-95, -24, 4, 29, 80, 85]
sortNumsAscending(null) ➞ []
sortNumsAscending([]) ➞ []
Notes
Test input can be positive or negative.*/
var array=[80, 29, 4, -95, -24, 85];
function ascendingOrderSorting(array){
    let temp;
    for(let i=0;i<(array.length-1);i++){
        for(let j=(i+1);j<array.length;j++){
            if(array[i]>array[j]){
                temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
    }
    return array;
}
console.log(ascendingOrderSorting(array));