/*Star Pattern 9*/
function star_pattern_9(n){
    let j;
    for(let i=1;i<=n;i++){
        let row="";
        for(j=1;j<=n;j++){
            if(j<=(n-i)){
                row+=" ";
            }
            else if(j>(n-i)){
                row+="*";
            }
        }
        if((i>=2)&&(j>n)){
            for(let k=(n+1);k<=((n+i)-1);k++){
                row+="*";
            }
        }
        
        console.log(row);
    }
    let x;
    for(let i=1;i<=n;i++){
        let row_2="";
        for(x=1;x<=n;x++){
            if(x<i){
                row_2+=" ";
            }
            else if(x>=i){
                row_2+="*";
            }
        }
        if((i<n)&&(x>n)){
            for(let k=(n+1);k<=((2*n)-i);k++){
                row_2+="*";
            }
        }
        
        console.log(row_2);
    }
}
star_pattern_9(6);