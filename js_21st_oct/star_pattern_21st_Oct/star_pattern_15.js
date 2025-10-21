/*Star pattern 15*/
function star_pattern_15(n){
     for(let i=1;i<=n;i++){
        let row="";
        for(let j=65;j<=(70-i);j++){
            row+=String.fromCharCode(j);
            

        }
        console.log(row);
    }

}
star_pattern_15(5);