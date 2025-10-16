/*Rotate an array to the right*/
let array=[1,2,3,4,5];
function rotateAnArray(array,k){
    let rotate_array=[];
    for(let i=(k+1);i<array.length;i++){
        rotate_array.push(array[i]);
    }
    for(let i=0;i<(k+1);i++){
        rotate_array.push(array[i]);
    }
    return rotate_array;

}
console.log(rotateAnArray(array,2));