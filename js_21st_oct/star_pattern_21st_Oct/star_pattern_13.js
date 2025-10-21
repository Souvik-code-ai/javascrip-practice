// star pattern 13
function star_pattern_13(n){
    let a=1;
        for(let i=1;i<=n;i++){
        let row="";
        for(let j=1;j<=i;j++){
            row+=a;
            a++;

        }
        console.log(row);
    }

}
star_pattern_13(6);
