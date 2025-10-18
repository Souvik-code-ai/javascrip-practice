let str="The quick brown fox jumped";
function returnLargestStringFromGivenString(str){
    let length=0;
    let k;
    let length_array=[];
    let index_array=[];
    for(let i=0;i<str.length;i++){
        if(str[i]!==" "){
            length++;

        }
        else if(str[i]===" "){
            length_array.push(length);
            k=(i-length);
            index_array.push(k);
            length=0;

        }
        if(i===(str.length-1)){
            length_array.push(length);
            k=(i-length+1);
            index_array.push(k);
        }

    }
    let large=length_array.reduce((prev,curr)=>{
        if(prev>=curr){
            return prev;
        }
        else if(prev<curr){
            return curr;
        }
    });
    console.log(large);
    let large_string="";
    for(let i=0;i<length_array.length;i++){
        if(length_array[i]===large){
            let limit=(large+index_array[i]);
            for(let j=index_array[i];j<limit;j++){
                large_string+=str[j];

            }
            break;
        }
        
    }
    return large_string;
}
console.log(returnLargestStringFromGivenString(str));