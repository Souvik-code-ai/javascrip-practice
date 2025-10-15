/*Highest Digit
Create a function that takes a number as an argument and returns the highest digit in that number.
Examples
highestDigit(379) ➞ 9
highestDigit(2) ➞ 2
highestDigit(377401) ➞ 7
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.*/ 
function findLargestNumberFromGivenIntezar(number){
    let string_of_number=number.toString();
    let temp;
    if(string_of_number.length===1){
        return number;
    }
    let array_of_number=[];
    for(let i=0;i<string_of_number.length;i++){
        array_of_number.push(parseInt(string_of_number[i]));
    }
    for(let i=0;i<((array_of_number.length)-1);i++){
        for(let j=(i+1);j<array_of_number.length;j++){
            if(array_of_number[i]>array_of_number[j]){
                temp=array_of_number[i];
                array_of_number[i]=array_of_number[j];
                array_of_number[j]=temp;
            }
        }

    }
    return array_of_number[array_of_number.length-1];
}
console.log(findLargestNumberFromGivenIntezar(7));