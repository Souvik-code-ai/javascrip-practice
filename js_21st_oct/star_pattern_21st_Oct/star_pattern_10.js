/*Star_pattern_10*/
function star_pattern_10(n){
    for(let i=1;i<=n;i++){
        let row="";
        for(let j=1;j<=i;j++){
            row+="*";

        }
        console.log(row);
    }
    for(let i=1;i<n;i++){
        let row="";
        for(let j=(n-1);j>=i;j--){
            row+="*";
        }
        console.log(row);
    }

}
star_pattern_10(6);
    
