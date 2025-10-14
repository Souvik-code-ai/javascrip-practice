/*
Find the Smallest and Biggest Numbers
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

Examples
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
minMax([2334454, 5]) ➞ [5, 2334454]
minMax([1]) ➞ [1, 1]
Notes
All test arrays will have at least one element and are valid.*/ 
var a=[2,45,7,5];
function minmax(a){
    var min;
    var max;
    if(a.length===1)
    {
        min=a[0];
        max=a[0];

    }
    else if(a.length!==1){
        a.reduce((prev,curr)=>{
            if(prev>curr)
            {
                max=prev;
                return prev;
            }
            else if(prev<curr)
            {
                max=curr;
                return curr;
            }

        });
        a.reduce((prev,curr)=>{
            if(prev>curr)
            {
                min=curr;
                return curr;
            }
            else if(prev<curr)
            {
                min=prev;
                return prev;
            }

        });
    }
    let result=[];
    result.push([min,max]);
    return result;
}
console.log(minmax(a));