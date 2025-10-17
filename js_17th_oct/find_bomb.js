/*Find the Bomb
Create a function that finds the word "bomb" in the given string (not case sensitive). If found, return "Duck!!!", otherwise return "There is no bomb, relax.".

Examples
bomb("There is a bomb.") ➞ "Duck!!!"

bomb("Hey, did you think there is a bomb?") ➞ "Duck!!!"

bomb("This goes boom!!!") ➞ "There is no bomb, relax."
Notes
"bomb" may appear in different cases (i.e. uppercase, lowercase, mixed).*/
let str="This goes boom!!!";
function findBomb(str){
    let temp=1;
    for(let i=0;i<=(str.length-4);i++){
        /*if((str[i]==="B")||(str[i]==="b")){
            if((str[i]==="O")||(str[i]==="o")){
                if((str[i]==="M")||(str[i]==="m")){
                    if((str[i]==="B")||(str[i]==="b")){
                        temp=0;
                        return "Duck!!";
                    }
                }

            }

        }*/
        if(str[i] === 'b' && str[i+1] === 'o' && str[i+2] === 'm' && str[i+3] === 'b') {
            temp=0;
            return "Duck!!";
        }
        else if(str[i] === 'B' && str[i+1] === 'O' && str[i+2] === 'M' && str[i+3] === 'B'){
            temp=0;
            return "Duck!!";
        } 
    }
    if(temp===1){
        return "There is no bomb, relax.";

    }
}
console.log(findBomb(str));