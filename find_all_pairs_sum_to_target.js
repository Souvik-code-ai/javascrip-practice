//// Input: [1, 2, 3, 4, 5], target = 6
// Output: [[1,5], [2,4]]
let arr=[1,2,3,4,5];
function findPairs(arr, target){
    let sum;
    let sub_array=[];
    let array=[];
    for(let i=0;i<(arr.length-1);i++){
        for(j=(i+1);j<arr.length;j++){
            sum=arr[i]+arr[j];
            if(sum===target){
                sub_array.push(arr[i],arr[j]);
                array.push(sub_array);
                sub_array=[];

            }
            sum=0;
        }
    }
    return array;
}
console.log(findPairs(arr,6));
