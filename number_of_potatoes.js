/*Find the Amount of Potatoes
Create a function to return the amount of potatoes there are in a string.
Examples
potatoes("potato") ➞ 1
potatoes("potatopotato") ➞ 2
potatoes("potatoapple") ➞ 1
Notes
N/A*/
function amountOfPotatoes(string) {
    var count = 0;
    var j;
    for (let i = 0; i < string.length; i++) {
        if ((string[i] === 'p') || (string[i] === 'P')) {
            j=i;
            if (string[j] === "p") {
                j++;
                if (string[j] === "o") {
                    j++;
                    if (string[j] === "t") {
                        j++;
                        if (string[j] === "a") {
                            j++;
                            if (string[j] === "t") {
                                j++;
                                if (string[j] === "o") {
                                    count++;
                                }
                            }
                        }
                    }
                }
            }

        }
    }
    return count;
}
console.log(amountOfPotatoes("potatoapple"));