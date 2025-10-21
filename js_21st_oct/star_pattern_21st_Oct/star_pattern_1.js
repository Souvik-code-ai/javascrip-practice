/*star pattern 1*/
function star_pattern_1(N){
   
    for(let i=1;i<=N;i++){
        let row="";
        for(let j=1;j<=N;j++){
            row+="*";
        }
        
        console.log(row);
    }
   
}
star_pattern_1(3);