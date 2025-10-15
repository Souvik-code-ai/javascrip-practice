/*Sort by String Length
Create a function that returns an array of strings sorted by length in ascending order.
Examples
sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]
sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]
sortByLength([]) ➞ []
Notes
Strings will have unique lengths, so don't worry about comparing two strings with identical length.
Return an empty array if the input array is empty (see example #4).*/ 
array_of_string=["a", "ccc", "dddd", "bb"];
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