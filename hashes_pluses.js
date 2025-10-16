/*Hashes and Pluses
Create a function that returns the number of hashes and pluses in a string.

Examples
hashPlusCount("###+") ➞ [3, 1]

hashPlusCount("##+++#") ➞ [3, 3]

hashPlusCount("#+++#+#++#") ➞ [4, 6]

hashPlusCount("") ➞ [0, 0]
Notes
Return [0, 0] for an empty string.
Return in the order of [hashes, pluses].*/
function hashesandpluses(string){
    let string_array=[];
    if(string.length===0)
    {
        string_array=[0,0];
    }
    else if(string.length!==0){
        let j=0;
        let k=0;
        for(let i=0;i<string.length;i++){
            if(string[i]==="#"){
                j++;
            }
            else if(string[i]==="+"){
                k++;
            }
        }
        string_array.push(j);
        string_array.push(k);
    }
    return string_array;
}
console.log(hashesandpluses(""));