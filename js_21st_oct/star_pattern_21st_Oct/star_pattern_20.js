//star pattern 20
function star_pattern_20(n) {
    let gap=2*n-2;

    for (let i = 1; i <= 2 * n - 1; i++) {
        let row = "";
        let stars = i <= n ? i : 2 * n - i;

        for (let j = 1; j <= stars; j++) {
            row += "*";
        }

        for (let j = 1; j <= gap; j++) {
            row += " ";
        }

        for (let j = 1; j <= stars; j++) {
            row += "*";
        }

        console.log(row);
        if (i < n) {
            gap -= 2;
        } else {
            gap+= 2;
        }
    }
}


star_pattern_20(5);
