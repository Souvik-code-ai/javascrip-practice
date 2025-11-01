//Heap Sort
let array = [50, 45, 35, 33, 16, 25, 34, 12, 10];
let n = array.length;
let left_child;
let right_child;
for (let i = (n - 1); i >= 0; i--) {
    let j = 0;
    // let parent=j;
    let temp = array[0];
    array[0] = array[i];
    array[i] = temp;
    while (i>=0) {
        left_child = (2 * j + 1);
        if (left_child >= i) {
            break;
        }
        right_child = (2 * j + 2);
        if (right_child >= i) {
            if (array[left_child] > array[j]) {
                let temp = array[left_child];
                array[left_child] = array[j];
                array[j] = temp;
                //j = left_child;
                break;
            }
        }
        if (array[left_child] > array[right_child]) {
            if (array[left_child] > array[j]) {
                let temp = array[left_child];
                array[left_child] = array[j];
                array[j] = temp;
                j = left_child;
            }
        }
        else if (array[left_child] < array[right_child]) {
            if (array[right_child] > array[j]) {
                let temp = array[right_child];
                array[right_child] = array[j];
                array[j] = temp;
                j = right_child;
            }
        }
        // else {
        //     if (array[left_child] > array[j]) {
        //         let temp = array[left_child];
        //         array[left_child] = array[j];
        //         array[j] = temp;
        //         j = left_child;
        //     }
        // }

    }
}
console.log(array);