// Right Shift by Division
// The right shift operation is similar to floor division by powers of two.
// Sample calculation using the right shift operator ( >> ):
// 80 >> 3 = floor(80/2^3) = floor(80/8) = 10
// -24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
// -5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3
// Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.
// Examples
// shiftToRight(80, 3) ➞ 10
// shiftToRight(-24, 2) ➞ -6
// shiftToRight(-5, 1) ➞ -3
// shiftToRight(4666, 6) ➞ 72
// shiftToRight(3777, 6) ➞ 59
// shiftToRight(-512, 10) ➞ -1
// Notes
// There will be no negative values for the second parameter y.
// This challenge is more like recreating of the right shift operation, thus, the use of the operator directly is prohibited.
// Alternatively, you can solve this challenge via recursion.
// A recursive version of this challenge can be found via this link.
function rightShiftByDivision(a,b){
    let two_to_the_power=2**b;
    let ans;
    if(a%two_to_the_power===0){
        ans=a/two_to_the_power;
    }
    else if(a%two_to_the_power!==0){
        ans=parseInt(a/two_to_the_power);
        if(ans<0){
            ans=ans-1;
        }
        else if(ans>=0){
            ans=ans+1;
        }
    }
    
    return ans;
}
console.log(rightShiftByDivision(-24,2));
//time complexity:O(1)
//space complexity:O(1)