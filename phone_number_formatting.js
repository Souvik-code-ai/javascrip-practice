/*Phone Number Formatting
Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

Examples
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) ➞ "(519) 555-4468"

formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]) ➞ "(345) 501-2527"
Notes
Don't forget the space after the closing parenthesis.*/
let array=[1,2,3,4,5,6,7,8,9,0];
function formatPhoneNumber(array){
    let array_str;
    array_str=array.toString();
    let array_str_removed=array_str.replaceAll("[","");
    let array_str_removed_1=array_str_removed.replaceAll("]","");
    let array_str_removed_2=array_str_removed_1.replaceAll(",","");
    return "("+array_str_removed_2.slice(0,3)+")"+" "+array_str_removed_2.slice(3,6)+"-"+array_str_removed_2.slice(6,10);
}
console.log(formatPhoneNumber(array));