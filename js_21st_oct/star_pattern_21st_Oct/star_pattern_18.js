//Star Pattern 18
function star_pattern_18(n){
    for(let i=1;i<=n;i++){
        let row="";
        for(let j=i;j>=1;j--){
            row+=String.fromCharCode(70-j);
        }
        console.log(row);
    }

}
star_pattern_18(5);