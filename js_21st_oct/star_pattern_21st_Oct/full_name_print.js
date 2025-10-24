// //First Alphabetical Letter print of my name//
// function firstAlphabeticalLetterOfMyName(n) {
//     let row;
//     for (let i = 1; i <= (2 * n - 1); i++) {
//         row = "";
//         for (let j = 1; j <= n; j++) {
//             if (i === 1 || i === n) {
//                 row += "*";
//             }
//             else if (i > n) {
//                 if (i === (2 * n - 1)) {
//                     row += "*";
//                 }
//                 else if (i !== (2 * n - 1)) {
//                     if (j === n) {
//                         row += "*";
//                     }
//                     else {
//                         row += " ";
//                     }
//                 }
//             }
//             else {
//                 if (j === 1) {
//                     row += "*";
//                 }
//                 else if (j !== 1) {
//                     row += " ";
//                 }
//             }
//         }
//         console.log(row);
//     }
// }

// //second letter of my name
// function secondLetter(n) {
//     let row;
//     for (let i = 1; i <= (2 * n - 1); i++) {
//         row = "";
//         for (let j = 1; j <= n; j++) {
//             if (i === 1 || i === (2 * n - 1)) {
//                 row += "*";
//             }
//             else {
//                 if (j === 1 || j === n) {
//                     row += "*";
//                 }
//                 else {
//                     row += " ";
//                 }
//             }
//         }
//         console.log(row);
//     }
//     //return row;
// }

// //Third Letter
// function thirdLetter(n) {
//     let row;
//     for (let i = 1; i <= (2 * n - 1); i++) {
//         row = "";
//         for (let j = 1; j <= n; j++) {
//             if (i === (2 * n - 1)) {
//                 row += "*";
//             }
//             else {
//                 if (j === 1 || j === n) {
//                     row += "*";
//                 }
//                 else {
//                     row += " ";
//                 }
//             }
//         }
//         console.log(row);
//     }
//     // return row;
// }

// //Third Last Letter Of Alphabetical Letter
// function thirdLastLetter(n) {
//     let row;
//     for (let i = 1; i <= (n + 1); i++) {
//         row = "";
//         for (let j = 1; j <= i; j++) {
//             if (j === i) {
//                 row += "*";
//             }
//             else {
//                 row += " ";
//             }
//         }
//         for (let j = 1; j <= ((2 * (n - i)) + 1); j++) {
//             row += " ";
//         }

//         if (i === (n + 1)) {
//             row += "";
//         }
//         else {
//             row += "*";
//         }
//         console.log(row);
//     }
//     //return row;
// }

// function secondLastLetter(n) {
//     let row;
//     for (let i = 1; i <= (2 * n - 1); i++) {
//         row = "";
//         for (let j = 1; j <= (n + 1); j++) {
//             if (i === 1 || i === (2 * n - 1)) {
//                 row += "*";
//             }
//             else {
//                 if (j === (parseInt(n / 2) + 1)) {
//                     row += "*";
//                 }
//                 else {
//                     row += " ";
//                 }
//             }
//         }
//         console.log(row);
//     }
//     //return row;
// }
// //Last Letter of my name
// function lastLetter(n) {
//     let row;
//     for (let i = 1; i <= (2 * n - 1); i++) {
//         row = "";
//         for (let j = 1; j <= n; j++) {
//             if ((i === 1) && (j === 1 || j === n)) {
//                 row += "*";
//             }
//             else if ((i === 2) && (j === 1 || j === (n - 1))) {
//                 row += "*";
//             }
//             else if ((i === 3) && (j === 1 || j === 2)) {
//                 row += "*";
//             }
//             else if ((i === 4) && (j === 1)) {
//                 row += "*";
//             }
//             else if ((i === (n + 1)) && (j === 1 || j === 2)) {
//                 row += "*";
//             }
//             else if ((i === (n + 2)) && (j === 1 || j === 3)) {
//                 row += "*";
//             }
//             else if ((i === (n + 3)) && (j === 1 || j === n)) {
//                 row += "*";
//             }
//             else {
//                 row += " ";
//             }


//         }
//         console.log(row);
//     }
//     //return row;
// }
// function fullNamePrint(n) {
//     let row = "";

//     firstAlphabeticalLetterOfMyName(6);
//     secondLetter(4);
//     thirdLetter(4);
//     thirdLastLetter(4);
//     secondLastLetter(5);
//     lastLetter(4);

//     // row=row+firstAlphabeticalLetterOfMyName(6);
//     // row=row+secondLetter(4);
//     // row=row+thirdLetter(4);
//     // row=row+thirdLastLetter(4);
//     // row=row+secondLastLetter(5);
//     // row=row+lastLetter(4);
//     // console.log(row);

// }
// fullNamePrint(4);
function fullNamePrint(n){
    let row;
    for(let i=1;i<=n;i++){
        row="";
        for(let j=1;j<=34;j++){
            if(i===1){
                if(j===10||j===11||j===14||j===15||j===16||j===17||j===18||j===19||j===20||j===21||j===22||j===23||j===24||j===32||j===33){
                    row+=" ";
                }
                else{
                    row+="*";
                }
            }
            else if(i===2){
                if(j===2||j===3||j===4||j===6||j===7||j===10||j===11||j===13||j===15||j===16||j===17||j===18||j===19||j===20||j===21||j===22||j===23||j===26||j===27||j===25||j===32||j===34||j===29||j===30){
    
                    row+=" ";
                }
                else{
                    row+="*";
                }
            }
            else if(i===3){
                if(j===2||j===3||j===4||j===7||j===6||j===10||j===11||j===13||j===14||j===16||j===17||j===18||j===19||j===20||j===21||j===22||j===24||j===25||j===26||j===27||j===33||j===34||j===29||j===30){
                    row+=" ";
                }
                else{
                    row+="*";
                }
            }
            else if(i===4){
                if(j===6||j===7||j===10||j===11||j===13||j===14||j===15||j===17||j===18||j===19||j===20||j===21||j===23||j===24||j===25||j===26||j===27||j===29||j===30||j===32||j===33||j===34){
                    row+=" ";
                }
                else{
                    row+="*";
                }
            }
            else if(i===5){
                if(j===1||j===2||j===3||j===6||j===7||j===10||j===11||j===13||j===14||j===15||j===16||j===18||j===19||j===20||j===22||j===23||j===24||j===25||j===26||j===27||j===29||j===30||j===33||j===34){
                    row+=" ";
                }
                else{
                    row+="*";
                }
            }
            else if(i===6){
                if(j===1||j===2||j===3||j===6||j===7||j===10||j===11||j===19||j===13||j===14||j===15||j===16||j===17||j===21||j===22||j===23||j===24||j===25||j===26||j===27||j===29||j===30||j===32||j===34){
                    row+=" ";
                }
                else{
                    row+="*";
                }
            }
            else if(i===7){
                if(j===13||j===14||j===15||j===16||j===16||j===17||j===18||j===20||j===20||j===21||j===22||j===23||j===24||j===25||j===32||j===33){
                    row+=" ";
                }
                else{
                    row+="*";
                }
            }
        }
        console.log(row);
    }

}
fullNamePrint(7);
