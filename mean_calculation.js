/*Calculate the Mean
Create a function that takes an array of numbers and returns the mean (average) of all those numbers.
Examples
mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]) ➞ 2.55
mean([2, 3, 2, 3]) ➞ 2.50
mean([3, 3, 3, 3, 3]) ➞ 3.00
Notes
Round to two decimal places.
You can expect a number ranging from 0 to 10,000.*/ 
let array=[2, 3, 2, 3];
function meanCalculation(array){
    let sum;
    sum=array.reduce((prev,curr)=>{
        return prev+curr;
    }) ;
    let avg=sum/array.length;
    let round_of_avg=avg.toFixed(2);
    return round_of_avg;

}
console.log(meanCalculation(array));