// Input: "hello"
// Output: "olleh"
let str="hello";
function reverseString(str){
    let str_arr=[];
    for(let i=(str.length-1);i>=0;i--){
        str_arr.push(str[i]);
    }
    let str_1=str_arr.toString();
    let str_arr_string=str_1.replaceAll(",","");
    let str_arr_string_1=str_arr_string.replaceAll("[","");
    let str_arr_string_2=str_arr_string_1.replaceAll("]","");
    return str_arr_string_2;
}
console.log(reverseString(str));