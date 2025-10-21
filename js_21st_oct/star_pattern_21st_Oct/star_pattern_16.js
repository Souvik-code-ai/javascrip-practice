//Star Pattern 16
function star_pattern_16(n){
    for(let i=1;i<=n;i++){
        let row="";
        for(let j=1;j<=i;j++){
            row+=String.fromCharCode(64+i);
        }
        console.log(row);
    }

}
star_pattern_16(5);