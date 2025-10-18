/*Reverse the Case
Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
Examples
reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"
reverseCase("MANY THANKS") ➞ "many thanks"
reverseCase("sPoNtAnEoUs") ➞ "SpOnTaNeOuS"
Notes
N/A*/
let reverse_string="";
function reverseTheCseOfEachCharacter(str){
    for(let i=0;i<str.length;i++){
        if(str[i]===str[i].toUpperCase()){
            reverse_string+=str[i].toLowerCase();
        }
        else if(str[i]===str[i].toLowerCase()){
            reverse_string+=str[i].toUpperCase();
        }
    }
    return reverse_string;
}
console.log(reverseTheCseOfEachCharacter("Happy Birthday"));