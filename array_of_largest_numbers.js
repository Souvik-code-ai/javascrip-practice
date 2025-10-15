/*Find the Largest Numbers in a Group of Arrays
Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
Examples
findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ➞ [-34, -2, 7]
findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]) ➞ [0.7634, 9.32, 9]
Notes
Watch out for negative integers (numbers).*/
let array=[[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]];
function arrayofLargestNumbers(array) {
    let len;
    let array_of_largest_numbers=[]
    let temp;
    for (let k = 0; k < array.length; k++) {
        for (let i = 0; i < (array[k].length - 1); i++) {
            for (let j = (i + 1); j < array[k].length; j++) {
                if (array[k][i] > array[k][j]) {
                    temp = array[k][i];
                    array[k][i] = array[k][j];
                    array[k][j] = temp;

                }
            }

        }
    }
    for(let k=0;k<array.length;k++){
        len=(array[k].length-1);

        array_of_largest_numbers.push(array[k][len]);
    }
    return array_of_largest_numbers;
} 
console.log(arrayofLargestNumbers(array));