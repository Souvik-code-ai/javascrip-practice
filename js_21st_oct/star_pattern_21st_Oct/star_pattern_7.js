/*star Pattern 7*/
function star_pattern_7(N){
    let j;
    for(let i=1;i<=N;i++){
        let row="";
        for(j=1;j<=N;j++){
            if(j<=(N-i)){
                row+=" ";
            }
            else if(j>(N-i)){
                row+="*";
            }
        }
        if((i>=2)&&(j>N)){
            for(let k=(N+1);k<=((N+i)-1);k++){
                row+="*";
            }
        }
        
        console.log(row);
    }
}
star_pattern_7(5);