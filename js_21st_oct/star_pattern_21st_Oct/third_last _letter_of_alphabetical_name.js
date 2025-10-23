//Third Last Letter Of Alphabetical Letter
function thirdLastLetter(n) {
    let row;
    for (let i = 1; i <= (n + 1); i++) {
        row = "";
        for (let j = 1; j <= i; j++) {
            if (j === i) {
                row += "*";
            }
            else {
                row += " ";
            }
        }
        for (let j = 1; j <= ((2 * (n - i))+ 1); j++) {
            row += " ";
        }
        // for (let j = 1; j <= i; j++) {
        //     if (j === i) {
        //         row += "*";
        //     }
        //     else if(j!==i){
        //         row += "*";
        //     }
        //     // row+="*";
        // }
        //row+="*";
        if(i===(n+1)){
            row+="";
        }
        else{
            row+="*";
        }
        console.log(row);
    }
}
thirdLastLetter(4);