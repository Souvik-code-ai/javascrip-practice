/*Transforming Words into Binary Strings
Write a function that transforms all letters from [a, m] to 0 and letters from [n, z] to 1 in a string.
Examples
convertBinary("house") ➞ "01110"
convertBinary("excLAIM") ➞ "0100000"
convertBinary("moon") ➞ "0111"
Notes
Conversion should be case insensitive (see example #2).*/
let str="moon";
function convertBinary(str){
    let binary_str="";
    for(let i=0;i<str.length;i++){
        if((str.charCodeAt(i)>64)&&(str.charCodeAt(i)<78)){
            binary_str+='0';
        }
        else if((str.charCodeAt(i)>77)&&(str.charCodeAt(i)<91)){
            binary_str+='1';
        }
        else if((str.charCodeAt(i)>96)&&(str.charCodeAt(i)<110)){
            binary_str+='0';
        }
        else if((str.charCodeAt(i)>109)&&(str.charCodeAt(i)<123)){
            binary_str+='1';
        }
    }
    return binary_str;
}
console.log(convertBinary(str));