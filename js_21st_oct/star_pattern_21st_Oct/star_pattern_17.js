//star pattern 17
function star_pattern_17(n) {
    for (let i = 0; i<n; i++) {
        let row = "";
        for (let s = 0; s <(n-i-1); s++) {
            row +=" ";
        }
        for (let j = 0; j <= i; j++) {
            row += String.fromCharCode(65+j);
        }
        for (let j =(i-1); j >= 0; j--) {
            row += String.fromCharCode(65+j);
        }

        console.log(row);
    }
}
star_pattern_17(5);
