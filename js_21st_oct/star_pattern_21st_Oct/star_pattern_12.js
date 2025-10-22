/*Star Pattern 12*/
function star_pattern_12(n) {
    let k;
    for (let i=1; i<=n; i++) {
        let row = "";
        for (let j=1;j<= i;j++) {
            row += j;
        }

        for (let j=1;j<=2*(n - i);j++) {
            row += " ";
        }
        k=i;
        for (let j = 1;j<= i;j++) {
            row += k;
            k--;
        }

        console.log(row);
    }
}
star_pattern_12(4)
