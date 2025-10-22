//Third Letter
function thirdLetter(n){
    let row;
    for(let i=1;i<=(2*n-1);i++){
        row="";
        for(let j=1;j<=n;j++){
            if(i===(2*n-1)){
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
thirdLetter(4);