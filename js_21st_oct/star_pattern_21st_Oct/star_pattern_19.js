//Star Pattern 19
function star_pattern_19(n) {
    let x=0;
    for (let i = 0; i<n; i++) {
        let row = "";
        for (let j = 1;j<=(n-i); j++) {
            row += "*";
        }
        for (let j = 0;j<x; j++) {
            row += " ";
        }
        for (let j = 1; j<=(n-i); j++) {
            row += "*";
        }
        x+= 2; 
        console.log(row);
    }
    x=2*n-2;
    for (let i = 1; i<=n; i++) {
        let row = "";
        for (let j = 1;j<=i;j++) {
            row += "*";
        }
        for (let j=0;j<x; j++) {
            row += " ";
        }

        for (let j=1; j<=i;j++) {
            row += "*";
        }

        x=x-2; 
        console.log(row);
    }
}
star_pattern_19(5);
