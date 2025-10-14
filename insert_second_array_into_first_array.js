/*Tuck in Array
Create a function that takes two arrays and insert the second array in the middle of the first array.
Examples
tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]
tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]
Notes
The first array always has two elements.
Use the spread syntax to solve this challenge.*/
first_Array=[3,4];
second_Array=[1,2];
function insertionOfSecondArrayIntoFirstArray(first_Array,second_Array){
    if(first_Array.length===2){
        var flag=first_Array[1];
        first_Array.length=(first_Array.length+second_Array.length);
        j=1;
        for(let i=0;i<second_Array.length;i++){
            first_Array[j]=second_Array[i];
            j++;
        }
        first_Array[j]=flag;
        return first_Array;
    }

}
console.log(insertionOfSecondArrayIntoFirstArray(first_Array,second_Array));