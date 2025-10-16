// Input: "()[]{}" => true
// Input: "(]" => false
function isValidParentheses(str){
    let flag;
    for(let i=0;i<(str.length-1);i++){
        if((str[i]==="(")&&(str[i+1]===")"))
            {
                flag=1;

            }
        
        else if((str[i]==="[")&&(str[i+1]==="]"))
            {
                flag=1;

            }
        else if((str[i]==="{")&&(str[i+1]==="}"))
            {
                flag=1;

            }
        
        else if((str[i]==="(")&&(str[i+1]!==")"))
            {
               // flag=0;
                return false;

            }
        
        else if((str[i]==="{")&&(str[i+1]!=="}"))
            {
                //flag=0;
                return false;

            }
        
        else if((str[i]==="[")&&(str[i+1]!=="]"))
            {
                //flag=0;
                return false;

            }
        

    }
    if(flag===1){
        return true;

    }

}
console.log(isValidParentheses("()"));
