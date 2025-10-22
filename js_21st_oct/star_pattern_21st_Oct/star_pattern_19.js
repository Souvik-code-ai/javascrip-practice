//Star Pattern 19
function star_pattern_19(n){
    let row;
    for(let i=1;i<=(2*n);i++){
        row="";
        if(i<=n){
            for(let j=1;j<=(n-i+1);j++){
                row+="*";
            }
            for(let j=1;j<=(2*i-2);j++){
                row+=" ";
            }
            for(let j=1;j<=(n-i+1);j++){
                row+="*";
            }
        }
        else if(i>n){
            for(let j=1;j<=(i-n);j++){
                row+="*";
            }
            for(let j=1;j<=((2*n-2*(i-n)));j++){
                row+=" ";
            }
            for(let j=1;j<=(i-n);j++){
                row+="*";
            }
        }
        console.log(row);
    }
}
star_pattern_19(5)