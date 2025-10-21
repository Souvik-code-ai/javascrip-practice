/*Star Pattern 8*/
function star_pattern_8(N){
    let j;
    for(let i=1;i<=N;i++){
        let row="";
        for(j=1;j<=N;j++){
            if(j<i){
                row+=" ";
            }
            else if(j>=i){
                row+="*";
            }
        }
        if((i<N)&&(j>N)){
            for(let k=(N+1);k<=((2*N)-i);k++){
                row+="*";
            }
        }
        
        console.log(row);
    }
}
star_pattern_8(5);