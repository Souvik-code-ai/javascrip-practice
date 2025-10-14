/*Slightly Superior
You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).
Create a function that returns whether the first array is slightly superior to that of the second.
Examples
isFirstSuperior([1, 2, 4], [1, 2, 3]) ➞ true
// The pair of items at each index are compared in turn.
// 1 from the first array is the same as 1 from the second array.
// 2 is the same as 2.
// However, 4 is greater than 3, so first array is superior.
isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true
isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]) ➞ true
isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]) ➞ false
isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]) ➞ false
Notes
Both arrays will be the same length.
All values and their counterparts will always be of the same data type.
If the two arrays are the same, return false.*/ 
var array_1=[true, 10, "zebra"];
var array_2=[true, 10, "zebra"];
function isFirstSuperior(array_1,array_2){
    var flag;
    if(array_1.length===array_2.length){
        for(let i=0;i<array_1.length;i++){
            if((typeof array_1[i])!==(typeof array_2[i])){
                return false;
            }
            for(let i=0;i<array_1.length;i++){
                if(array_1[i]===array_2[i]){
                    flag=0;
                }
                else if(array_1[i]!==array_2[i]){
                    flag=1;
                    break;
                }
            }
            if(flag===1){
                    return true;
            }
            else if(flag===0){
                return false;
            }

        }
    }
}
console.log(isFirstSuperior(array_1,array_2));