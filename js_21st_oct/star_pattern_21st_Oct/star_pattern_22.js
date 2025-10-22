//Star pattern 22
function star_pattern_22(n) {
    const size = 2 * n - 1;

    for (let i = 0; i <size; i++) {
        let row = "";
        for (let j = 0; j <size; j++) {
            let top = i;
            let bottom = j;
            let right = (2 * n - 2) - j;
            let left = (2 * n - 2) - i;
            let min1 = top < bottom ? top : bottom;
            let min2 = left < right ? left : right;
            let minFinal = min1 < min2 ? min1 : min2;

            let value = n - minFinal;
            row += value+" ";
        }

        console.log(row);
    }
}

// Call the function
let n= 4;
star_pattern_22(n)