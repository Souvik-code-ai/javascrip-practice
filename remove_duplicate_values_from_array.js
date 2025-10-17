/*Transform into an Array with No Duplicates
A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.

[1, 3, 3, 5, 5, 5]
// original array

[1, 3, 5]
// original array transformed into a set
Create a function that sorts an array and removes all duplicate items from it.

Examples
set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]

set([4, 4, 4, 4]) ➞ [4]

set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]

set([3, 3, 3, 2, 1]) ➞ [1, 2, 3]
Notes
For this question, output an array, not a set. These are two distinctly different data structures in JavaScript (although they can be converted from one to the other).
See resources for a hint if you get stuck.*/
let arr=[1, 3, 3, 5, 5];
function removeDupilcatevalueFromArray(arr){
    let array_without_duplicates=[];
    for(let i=0;i<(arr.length-1);i++){
        for(let j=(i+1);j<arr.length;j++){
            if(arr[i]===arr[j]){
                for(let k=0;k<array_without_duplicates.length;k++){
                    if(array_without_duplicates[k]===arr[i]){
                        console.log("...");

                    }
                    else if(array_without_duplicates[k]!==arr[i]){
                        array_without_duplicates.push(arr[i]);
                    }
                }
            }
            else if(arr[i]!==arr[j]){
                array_without_duplicates.push(arr[i]);

            }
        }
    }
    return array_without_duplicates;

}
console.log(removeDupilcatevalueFromArray(arr));