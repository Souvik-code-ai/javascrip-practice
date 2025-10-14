/*Check if One Array can be Nested in Another
Create a function that returns true if the first array can be nested inside the 
second and false otherwise.
arr1 can be nested inside arr2 if:
arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.
Examples
canNest([1, 2, 3, 4], [0, 6]) ➞ true
canNest([3, 1], [4, 0]) ➞ true
canNest([9, 9, 8], [8, 9]) ➞ false
canNest([1, 2, 3, 4], [2, 3]) ➞ false
Notes
Note the strict inequality (see example #3).
*/
function oneArrayNestedInAnother(arr1,arr2){
    var min_of_arr1,max_of_arr1;
    var min_of_arr2,max_of_arr2;
    arr1.reduce((prev,curr)=>{
        if(prev>curr){
            max_of_arr1=prev;
            return prev;
        }
        else if(prev<curr){
            max_of_arr1=curr;
            return curr;
        }

    });
    arr1.reduce((prev,curr)=>{
        if(prev>curr){
            min_of_arr1=curr;
            return curr;
        }
        else if(prev<curr){
            min_of_arr1=prev;
            return prev;
        }
    });
    arr2.reduce((prev,curr)=>{
        if(prev>curr){
            max_of_arr2=prev;
            return prev;
        }
        else if(prev<curr){
            max_of_arr2=curr;
            return curr;
        }

    });
    arr2.reduce((prev,curr)=>{
        if(prev>curr){
            min_of_arr2=curr;
            return curr;
        }
        else if(prev<curr){
            min_of_arr2=prev;
            return prev;
        }
    });
    if((min_of_arr1>min_of_arr2)&&(max_of_arr1<max_of_arr2))
    {
        return true;
    }
    else 
    {
        return false;
    }
}
console.log(oneArrayNestedInAnother([1,2,3,4],[2,3]));