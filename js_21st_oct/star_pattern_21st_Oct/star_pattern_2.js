/*star Pattern 2*/
function star_pattern_2(N){
    for(let i=1;i<=N;i++){
        let row="";
        for(let j=1;j<=i;j++){
            row+="*";

        }
        console.log(row);
    }
}
star_pattern_2(5);