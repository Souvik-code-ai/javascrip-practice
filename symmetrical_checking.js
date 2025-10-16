/*Is the Number Symmetrical?
Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.

Examples
isSymmetrical(7227) ➞ true

isSymmetrical(12567) ➞ false

isSymmetrical(44444444) ➞ true

isSymmetrical(9939) ➞ false

isSymmetrical(1112111) ➞ true
Notes
N/A*/
function symmetricalChecking(number){
    let number_str=number.toString();
    let flag=1;
    let j=(number_str.length)-1;
    for(let i=0;i<(parseInt((number_str.length)/2)+1);i++){
        if(number_str[i]!==number_str[j]){
            flag=0;
            return false;
        }
        j--;
    }
    if(flag===1){
        return true;
    }

}
console.log(symmetricalChecking(12345));