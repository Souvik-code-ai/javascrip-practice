//First Alphabetical Letter print of my name//
function firstAlphabeticalLetterOfMyName(n){
    for(let i=1;i<=(2*n-1);i++){
        let row="";
        for(let j=1;j<=n;j++){
            if(i===1 || i===n){
                row+="*";
            }
            else if(i>n){
                if(i===(2*n-1)){
                    row+="*";
                }
                else if(i!==(2*n-1)){
                    if(j===n){
                        row+="*";
                    }
                    else{
                        row+=" ";
                    }
                }
            }
            else{
                if(j===1){
                    row+="*";
                }
                else if(j!==1){
                    row+=" ";
                }
            }
        }
        console.log(row);
    }
}
firstAlphabeticalLetterOfMyName(4);