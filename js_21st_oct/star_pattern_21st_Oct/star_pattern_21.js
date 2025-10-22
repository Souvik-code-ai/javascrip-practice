//Star Pattern 21
function star_pattern_21(n){
    for(let i=1;i<=n;i++){
        row="";
        for(let j=1;j<=n;j++){
            if(i===1 || i===n){
                row+="*";
            }
            else{
                if(j===1 || j===n){
                    row+="*";
                }
                else{
                    row+=" ";

                }
                
            }
        }
        console.log(row);
    }
}
star_pattern_21(9);