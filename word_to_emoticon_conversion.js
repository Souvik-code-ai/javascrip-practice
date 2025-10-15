/*Emotify the Sentence
Create a function that changes specific words into emoticons. Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.
word	emoticon
smile	:D
grin	:)
sad	:(
mad	:P
Examples
emotify("Make me smile") ➞ "Make me :D"
emotify("Make me grin") ➞ "Make me :)"
emotify("Make me sad") ➞ "Make me :("
Notes
The sentence always starts with "Make me".
Try to solve this without using conditional statements like if/else or switch.*/
function wordToEmoticon(word){
    return word==="smile"?":D":word==="grin"?":)":word==="sad"?":(":word==="mad"?":P":"";
}
console.log("Make me",wordToEmoticon("mad"));