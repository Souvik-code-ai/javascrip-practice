/*Valid Zip Code
Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:
Must only contain numbers (no non-digits allowed).
Must not contain any spaces.
Must not be greater than 5 digits in length.
Examples
isValid("59001") ➞ true
isValid("853a7") ➞ false
isValid("732 32") ➞ false
isValid("393939") ➞ false
Notes
N/A*/
function validZipCode(str){
    if(str.length>5){
        return false;
    }
    for(let i=0;i<str.length;i++){
        if(str[i]===" "){
            return false;
        }
        else if((str.charCodeAt(i)>64)&&(str.charCodeAt(i)<91)){
            return false;
        }
        else if((str.charCodeAt(i)>96)&&(str.charCodeAt(i)<123)){
            return false;
        }
        /*else if((typeof str[i])==="number"){
            return false;
        }*/
        
    }
     return true;
    

} 
console.log(validZipCode("732 32"));