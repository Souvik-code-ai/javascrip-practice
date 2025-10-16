//// Input: [1, 2, 3, 4, 5], target = 6
// Output: [[1,5], [2,4]]
let arr=[1,2,3,4,5];
function findPairs(arr, target){
    let sum;
    let sub_array=[];
    let array=[];
    for(let i=0;i<arr.length;i++){
        for(j=i;j<(arr.length-1);j++){
            sum=arr[i]+arr[j];
            if(sum===target){
                sub_array.push(arr[i]);
                sub_array.push(arr[j]);
                array.push(sub_array);

            }
            sum=0;
        }
    }
    return array;
}
console.log(findPairs(arr,6));
