/*
Pi to N Decimal Places
Given a number n, write a function that returns PI to n decimal places.
Examples
myPi(5) ➞ 3.14159
myPi(4) ➞ 3.1416
myPi(15) ➞ 3.141592653589793
Notes
n will not be above 15, to keep this challenge simple.
Round up the last digit if the next digit in PI is greater or equal to 5 (see second example above).
The return value must be a number, not a string.*/
function piValueWithGivenNumberRoundUp(n){
    let pi=3.141592653589793;
    let new_str;
    let flag;
    let pi_string=pi.toString();
    if(n>15){
        return;
    }
    if((parseInt(pi_string[2+n]))>=5){
        flag=(parseInt(pi_string[(2+n)-1]))+1;
        console.log(flag);
        new_str=pi_string.slice(0,(n+1))+flag;
    }
    else if((parseInt(pi_string[2+n]))<5){
        new_str=pi_string.slice(0,(n+2));
    }
    return parseFloat(new_str);
}
console.log(piValueWithGivenNumberRoundUp(10));