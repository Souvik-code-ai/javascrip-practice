//Min Heap Sort Data Insertion
//Heap Sort(Insertion at leaf)
let array=[10,15,19,20,30,25,39,23,40,35];
let n=(array.length-1);
function insertAtLeaf(array,n,target){
    n=n+1;
    let i=n;
    array[i]=target;
   // target=array[i];
    while(i>0){
        let parent=parseInt((i-1)/2);
        if(array[parent]>array[i]){
            let temp=array[parent];
            array[parent]=array[i];
            array[i]=temp;
            i=parent;
        }
        else{
            break;
        }
    }
    return array;

}
console.log(insertAtLeaf(array,n,1));
