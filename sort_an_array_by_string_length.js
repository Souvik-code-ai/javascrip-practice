/*Sort an Array by String Length
Create a function that takes an array of strings and return an array, sorted from shortest to longest.
Examples
sortByLength(["Google", "Apple", "Microsoft"])
➞ ["Apple", "Google", "Microsoft"]
sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
sortByLength(["Turing", "Einstein", "Jung"])
➞ ["Jung", "Turing", "Einstein"]
Notes
All test cases contain arrays with strings of different lengths, so you won't have to deal with multiple strings of the same length.*/ 
array_of_string=["Leonardo", "Michelangelo", "Raphael", "Donatello"];
function arrayOfStringLength(array_of_string){
    let array_of_length=[];
    let temp;
    for(let i=0;i<array_of_string.length;i++){
        array_of_length.push(array_of_string[i].length);
    }
    for(let i=0;i<(array_of_length.length-1);i++){
        for(let j=(i+1);j<array_of_length.length;j++){
            if(array_of_length[i]===array_of_length[j]){
                break;
            }
        }
    }
    for(let i=0;i<((array_of_length.length)-1);i++){
        for(let j=(i+1);j<array_of_length.length;j++){
            if(array_of_length[i]>array_of_length[j]){
                temp=array_of_length[i];
                array_of_length[i]=array_of_length[j];
                array_of_length[j]=temp;
            }
        }
    }
    let array_of_ascending_string_length=[];
    for(let i=0;i<array_of_length.length;i++){
        for(let j=0;j<array_of_string.length;j++){
            if(array_of_length[i]===(array_of_string[j].length)){
                array_of_ascending_string_length.push(array_of_string[j]);
            }
        }
    }
    return array_of_ascending_string_length;
}
console.log(arrayOfStringLength(array_of_string));