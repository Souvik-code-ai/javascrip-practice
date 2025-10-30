//selection sort
let flag;
let temp;
let j;
let array=[29, 10, 14, 37, 13];
for(let i=0;i<(array.length-1);i++){
    temp=i;

    for(j=(i+1);j<array.length;j++){
        // if(temp<array[j]){
        //     // // temp=array[j+1];
        //     // let x = array[j];
        //     // array[j]=array[i];
        //     // array[i]=x;
        // }
        if(array[temp]>array[j]){
            temp=j;
        }
    }
   // console.log(array);
    flag=array[i];
    array[i]=array[temp];
    array[temp]=flag;

}
console.log(array);
