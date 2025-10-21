/*star Pattern*/
function star_pattern_5(N){
    for(let i=1;i<=N;i++){
        let row="";
        for(let j=N;j>=i;j--){
            row+="*";
        }
        console.log(row);
    }
}
star_pattern_5(5);