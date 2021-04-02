const fs = require('fs');
const path = require('path');


const F1 = path.join(__dirname,'files','msg.txt');

const msg = "Leave me alone I hate u plzzz";

// fs.writeFile(F1, msg, {
//     encoding: 'utf-8',
//     flag: 'w'
// }, (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("File Written Successfully");
// });

fs.readFile(F1, {
    encoding: 'utf-8',
    flag:'r'
}, (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
})