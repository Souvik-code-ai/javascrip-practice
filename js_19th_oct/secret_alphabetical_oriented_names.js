/*Secret Society
A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
Create a function that takes in an array of names and returns the name of the secret society.
Examples
societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"
societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"
Notes
The secret society's name should be entirely uppercased.*/
let array_of_names=["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"];
let array_of_names_of_first_letter=[];
let string_of_names_of_first_letter="";
let temp;
function secretSociety(array_of_names){
    for(let i=0;i<array_of_names.length;i++){
        array_of_names_of_first_letter.push(array_of_names[i][0]);
    }
    let new_modified_string=array_of_names_of_first_letter.toString().replaceAll(",","");
    
    for(let j=0;j<(array_of_names_of_first_letter.length-1);j++){
        for(let k=(j+1);k<array_of_names_of_first_letter.length;k++){
            if(array_of_names_of_first_letter[j]>array_of_names_of_first_letter[k]){
                
                temp=array_of_names_of_first_letter[j];
                array_of_names_of_first_letter[j]=array_of_names_of_first_letter[k];
                array_of_names_of_first_letter[k]=temp;
                console.log(array_of_names_of_first_letter);

            }
        }
    }
    for(let i=0;i<array_of_names_of_first_letter.length;i++){
        string_of_names_of_first_letter+=array_of_names_of_first_letter[i];
    }
    return string_of_names_of_first_letter;
}
console.log(secretSociety(array_of_names));