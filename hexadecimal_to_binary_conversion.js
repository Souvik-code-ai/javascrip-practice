/*
Hex to Binary
Create a function that will take a HEX number and returns the binary equivalent (as a string).
Examples
toBinary(0xFF) ➞ "11111111"
toBinary(0xAA) ➞ "10101010"
toBinary(0xFA) ➞ "11111010"
Notes
The number will be always an 8-bit number.*/ 
function hexadecimalToBinary(hexadecimal_number){
    var binaryString=hexadecimal_number.toString(2).padStart(8,'0');//padStart is used to make the string 
    // lenth 8 bit.If length is less than it should fulfill it with '0' character//
    return binaryString;
}
console.log(hexadecimalToBinary(0xAB));