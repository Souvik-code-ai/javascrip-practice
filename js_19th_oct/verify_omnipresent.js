/*Omnipresent Value
A value is omnipresent if it exists in every subarray inside the main array.
To illustrate:
[[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// 3 exists in every element inside this array, so is omnipresent.
Create a function that determines whether an input value is omnipresent for a given array.
Examples
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false
isOmnipresent([[5], [5], [5], [6, 5]], 5) ➞ true
isOmnipresent([[5], [5], [5], [6, 5]], 6) ➞ false
Notes
Sub-arrays can be any length.*/
let array=[[1, 1], [1, 3], [5, 1], [6, 1]];
function isOmnipresent(array,value){
    let flag=0;
    for(let i=0;i<array.length;i++){
        for(j=0;j<array[i].length;j++){
            if(array[i][j]===value){
                flag=0;
                break;
            }
            else if(array[i][j]!==value){
                flag=1;
            }
        }
        if(flag==1){
            return false;
        }

    }
    return true;
}
console.log(isOmnipresent(array,6));