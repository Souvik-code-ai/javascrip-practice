/*Numbers to Arrays and Vice Versa
Write two functions:
toArray(), which converts a number to an array of its digits.
toNumber(), which converts an array of digits back to its number.
Examples
toArray(235) ➞ [2, 3, 5]
toArray(0) ➞ [0]
toNumber([2, 3, 5]) ➞ 235
toNumber([0]) ➞ 0
Notes
All test cases will be weakly positive numbers: >= 0*/
/*let new_array=[];
function toArray(num){
    let num_string=num.toString();
    for(let i=0;i<num_string.length;i++){
        new_array.push(parseInt(num_string[i]));
    }
    return new_array;
}
console.log(toArray(2));*/
let array;
function toNumber(array){
    let array_to_number=array.reduce((prev,curr)=>{
        return ((prev*10)+curr);

    });
    return array_to_number;
}
console.log(toNumber([2,2,3]));