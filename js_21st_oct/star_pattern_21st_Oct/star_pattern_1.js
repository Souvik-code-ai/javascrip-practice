/*star pattern 1*/
function star_pattern_1(n){
   
    for(let i=1;i<=n;i++){
        let row="";
        for(let j=1;j<=n;j++){
            row+="*";
        }
        
        console.log(row);
    }
   
}
star_pattern_1(5);