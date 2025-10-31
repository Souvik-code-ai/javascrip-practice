//Quick Sort
let array = [29, 10, 14, 37, 13];
let i = 0;
let j = (array.length - 1);
//let pivot=array[0];
let temp;
function partition(array, i, j) {
    let pivot = array[i];
    let start = i + 1;
    let end = j;
    while (start < end) {
        while (start <= end && array[start] <= pivot) {
            start++;
        }
        while (start <= end && pivot < array[end]) {
            end--;
        }
        if (start < end) {
            temp = array[start];
            array[start] = array[end];
            array[end] = temp;
        }
    }
    temp = array[i];
    array[i] = array[end];
    array[end] = temp;
    return end;
}
function quickSort(array, i, j) {
    if (i < j) {
        let loc = partition(array, i, j);
        quickSort(array, i, loc - 1);
        quickSort(array, loc + 1, j);
    }
}
quickSort(array, i, j);
console.log(array);