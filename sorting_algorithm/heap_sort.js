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
// | Operation                    | Complexity        | Explanation                                                                                            |
// | ---------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------ |
// | **Building the heap**        | (O(n))            | Using the “heapify” process bottom-up, it takes linear time to build a heap from an array of size (n). |
// | **Extracting max (n times)** | (O(n \log n))     | Each extraction (removing the max element and re-heapifying) takes (O(\log n)), repeated (n) times.    |
// | **Overall time complexity**  | **(O(n \log n))** | Dominated by the extraction step.                                                                      |
// | Aspect              | Complexity | Explanation                                                                            |
// | ------------------- | ---------- | -------------------------------------------------------------------------------------- |
// | **Auxiliary space** | (O(1))     | Heap sort is performed **in place**, requiring only a constant amount of extra memory. |
// | **Total space**     | (O(1))     | In-place sorting — no extra data structures used (aside from the input array).         |
// | Case        | Time Complexity | Space Complexity | Stable? |
// | ----------- | --------------- | ---------------- | ------- |
// | **Best**    | (O(n \log n))   | (O(1))           | ❌ No    |
// | **Average** | (O(n \log n))   | (O(1))           | ❌ No    |
// | **Worst**   | (O(n \log n))   | (O(1))           | ❌ No    |
