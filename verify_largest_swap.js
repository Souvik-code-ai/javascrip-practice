/*
Largest Swap
Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
To illustrate:
largestSwap(27) ➞ false

largestSwap(43) ➞ true
If 27 is our input, we should return false because swapping the digits gives us 72, and 
72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.
Examples
largestSwap(14) ➞ false
largestSwap(53) ➞ true
largestSwap(99) ➞ true
Notes
Numbers with two identical digits (third example) should yield true (you can't do better).*/
function CheckLargestOfDigitSwapping(number) {
    var stringOfNumber = number.toString();
    var swappingOfNumber;
    if (stringOfNumber.length === 2) {
        swappingOfNumber = (parseInt(stringOfNumber[1]) * 10) + parseInt(stringOfNumber[0]);

        console.log(swappingOfNumber);
        if (number > swappingOfNumber) {
            return true;
        }
        else if (number < swappingOfNumber) {
            return false;
        }
        else if (number == swappingOfNumber) {
            return true;
        }
    }
    else {
        return "not possible";
    }
}
console.log(CheckLargestOfDigitSwapping(9));