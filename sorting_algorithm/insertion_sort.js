//Insertion Sorting Algorithm
// let flag;
// let temp;
let array=[29, 10, 14, 37, 13];
for(let i=1;i<(array.length);i++){

    for(let j=0;j<i;j++){
        if(array[i]<array[j]){
            // temp=array[j+1];
            let x = array[j];
            array[j]=array[i];
            array[i]=x;
        }
        
    }

}
console.log(array);
