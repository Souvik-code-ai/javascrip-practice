//star pattern 20
function star_pattern_20(n){
    let row;
    for(let i=1;i<=(2*n);i++){
        row="";
        if(i<=n){
            for(let j=1;j<=i;j++){
                row+="*";
            }
            for(let j=1;j<=2*(n-i);j++){
                row+=" ";
            }
            for(let j=1;j<=i;j++){
                row+="*";
            }
        }
        else if(i>n){
            for(let j=1;j<=(2*n-i);j++){
                row+="*";
            }
            for(let j=1;j<=2*(i-n);j++){
                row+=" ";
            }
            for(let j=1;j<=(2*n-i);j++){
                row+="*";
            }
        }
        console.log(row);
    }
}
star_pattern_20(5)