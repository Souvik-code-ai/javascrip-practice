// Input: "aabbcdeff"
// Output: "c"
function firstUniqueChar(str){
    let flag;
    for(let i=0;i<(str.length-1);i++){
        if(str[i]===str[i+1]){
            flag=1;
        }
        else if(str[i]!==str[i+1]){
            if(str[i+1]!==str[i+2]){
                flag=0;
                return str[i+1];
            }
        }
    }
    if(flag===1){
        return ;
    }
}
console.log(firstUniqueChar("aabbcdeff"));
