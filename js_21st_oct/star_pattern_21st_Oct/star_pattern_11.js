//Star Pattern 11
function star_pattern_11(n){
    let x;
    for(let i=1;i<=n;i++){
        if(i%2===0){
            x=0;

        }
        else if(i%2!==0){
            x=1;
        }
        let row="";
        for(let j=1;j<=i;j++){
            row+=x;;
            x=1-x;
        }
        console.log(row);
    }
}
star_pattern_11(5);