// Input: "racecar"
// Output: true
let str="racecar";
function isPalindrome(str) { 
    let flag=1;
    let j=(str.length)-1;
    for(let i=0;i<(parseInt((str.length)/2)+1);i++){
        if(str[i]!==str[j]){
            flag=0;
            return false;
        }
        j--;
    }
    if(flag===1){
        return true;
    }
}
console.log(isPalindrome(str));
