//star pattern 14
function star_pattern_14(n){
     for(let i=1;i<=n;i++){
        let row="";
        for(let j=65;j<=(65+i);j++){
            row+=String.fromCharCode(j);
            

        }
        console.log(row);
    }

}
star_pattern_14(5);