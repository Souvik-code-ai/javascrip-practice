/*Hiding the Card Number
Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.
Examples
cardHide("1234123456785678") ➞ "************5678"
cardHide("8754456321113213") ➞ "************3213"
cardHide("35123413355523") ➞ "**********5523"
Examples
Ensure you return a string.
The length of the string must remain the same as the input.*/
function hideCardNumber(credit_card_number){
    let card_hide_number="";
    if(credit_card_number.length>=4){
        for(let i=0;i<credit_card_number.length;i++){
            if(i>=(credit_card_number.length-4)){
                card_hide_number+=credit_card_number[i];
            }
            else if(i<(credit_card_number.length-4)){
                card_hide_number+="*";
            }
        }
    }
    return card_hide_number;
}
console.log(hideCardNumber("1234123456785678"));