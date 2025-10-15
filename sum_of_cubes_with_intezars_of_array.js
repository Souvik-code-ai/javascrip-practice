/*Sum of Cubes
Create a function that takes in an array of numbers and returns the sum of its cubes.
Examples
sumOfCubes([1, 5, 9]) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
sumOfCubes([3, 4, 5]) ➞ 216
sumOfCubes([2]) ➞ 8
sumOfCubes([]) ➞ 0
Notes
If given an empty array, return 0.*/
let array=[3,4,5];
function sumOfCubesOfArrayValues(array){
    let ans=0;
    for(let i=0;i<array.length;i++){
        ans+=(array[i]**3);

    }
    return ans;
}
console.log(sumOfCubesOfArrayValues(array));