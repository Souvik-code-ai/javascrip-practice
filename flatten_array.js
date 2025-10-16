// Input: [1, [2, [3, 4]], 5]
// Output: [1, 2, 3, 4, 5]
let arr=[1, [2, [3, 4]], 5];
function flattenArray(arr){ 
    let arr_str=arr.toString();
    let arr_str_arr=[];
    let arr_str_replace_1=arr_str.replaceAll("[","");
    let arr_str_replace_2=arr_str_replace_1.replaceAll(",","");
    console.log(arr_str_replace_2);
    for(let i=0;i<arr_str_replace_2.length;i++){
        arr_str_arr.push(parseInt(arr_str_replace_2[i]));
    }
    return arr_str_arr;
}
console.log(flattenArray(arr));
