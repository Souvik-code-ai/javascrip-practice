//bubble sort
let temp;
let array=[29, 10, 14, 37, 13];
let i;
let j;
for(i=0;i<(array.length-1);i++){

    for(let j=0;j<(array.length-1);j++){
        if(array[j]>array[j+1]){
            // temp=array[j+1];
            let temp = array[j];
            array[j]=array[j+1];
            array[j+1]=temp;
        }
        
    }

}
console.log(array);