/*Maximum Possible Total
Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.
Examples
maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]) ➞ 43
maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]) ➞ 100
maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ 40
Notes
You can select any 5 numbers from the given array to form maximum possible total.*/
let array=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function maximumPossibleTotal(array){
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
    sum=0;
    for(let i=5;i<array.length;i++){
        sum+=array[i];
    }
    return sum;
}
console.log(maximumPossibleTotal(array));