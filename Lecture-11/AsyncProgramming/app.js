

function fun() {
    console.log('Inside Fun');
}

// function delay(n) {

//     for (let i = 1; i <= n; i++){
//         let x = new Date().getTime();
//         while (new Date().getTime() < 1000 + x) { } 
//     }
//     fun();

// }

console.log("START");

setTimeout(function cb() {
    console.log("CallBack");
}, 5000);


console.log("END");

const id=setInterval(function () {
    console.log("Called");
    // console.log("");
}, 1000);
