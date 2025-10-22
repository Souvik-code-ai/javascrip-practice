//Last Letter of my name
function lastLetter(n){
    let row;
    for(let i=1;i<=(2*n-1);i++){
        row="";
        for(let j=1;j<=n;j++){
            if((i===1)&&(j===1 || j===n)){
                row+="*";
            }
            else if((i===2)&&(j===1 || j===(n-1))){
                row+="*";
            }
            else if((i===3)&&(j===1 || j===2)){
                row+="*";
            }
            else if((i===4)&&(j===1)){
                row+="*";
            }
            else if((i===(n+1))&&(j===1 || j===2)){
                row+="*";
            }
            else if((i===(n+2))&&(j===1 || j===3)){
                row+="*";
            }
            else if((i===(n+3))&&(j===1 || j===n)){
                row+="*";
            }
            else{
                row+=" ";
            }


        }
        console.log(row);
    }
}
lastLetter(4);