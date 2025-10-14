/*
Number Split
Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
Examples
numberSplit(4) ➞ [2, 2]
numberSplit(10) ➞ [5, 5]
numberSplit(11) ➞ [5, 6]
numberSplit(-9) ➞ [-5, -4]
Notes
All numbers will be integers.
You can expect negative numbers too.*/
function twoHalvesFlippingOfanIntezar(intezar) {
    let arrayOfFlippedNumbers = [];
    if ((typeof intezar) === "number") {
        if (intezar > 0) 
        {
            if ((intezar % 2) === 0) {
                arrayOfFlippedNumbers.unshift(intezar / 2);
                arrayOfFlippedNumbers.unshift(intezar / 2);
            }
            else if ((intezar % 2) !== 0) {
                arrayOfFlippedNumbers.unshift((intezar / 2) + 0.5);
                arrayOfFlippedNumbers.unshift((intezar / 2) - 0.5);
            }

        }
        else if (intezar < 0) 
        {
            if ((intezar % 2) === 0) {
                arrayOfFlippedNumbers.unshift(intezar / 2);
                arrayOfFlippedNumbers.unshift(intezar / 2);
            }
            else if ((intezar % 2) !== 0) {
                arrayOfFlippedNumbers.unshift((intezar / 2) + 0.5);
                arrayOfFlippedNumbers.unshift((intezar / 2) - 0.5);
            }

        }
    }
    return arrayOfFlippedNumbers;
}
console.log(twoHalvesFlippingOfanIntezar(-11));
