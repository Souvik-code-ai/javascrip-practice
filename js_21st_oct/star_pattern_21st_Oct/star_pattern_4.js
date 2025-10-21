/*star pattern 4*/
function star_pattern_4(N){
    for(let i=1;i<=N;i++){
        let row="";
        for(let j=1;j<=i;j++){
            row+=i;
        }
        console.log(row);

    }
}
star_pattern_4(5);