/*Star Pattern 6*/
/*star Pattern*/
function star_pattern_6(N){
    for(let i=N;i>=1;i--){
        let row="";
        for(let j=1;j<=i;j++){
            row+=j;
        }
        console.log(row);
    }
}
star_pattern_6(5);