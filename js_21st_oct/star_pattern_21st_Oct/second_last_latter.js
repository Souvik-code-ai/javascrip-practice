function secondLastLetter(n){
    let row;
    for(let i=1;i<=(2*n-1);i++){
        row="";
        for(let j=1;j<=(n+1);j++){
            if(i===1 || i===(2*n-1)){
                row+="*";
            }
            else{
                if(j===(parseInt(n/2)+1)){
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
secondLastLetter(5);