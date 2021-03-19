

// console.log("START");



// let x = new Promise(function (resolve, reject) {

//     setTimeout(function () {
//         let randomNumber = Math.random();
//         console.log(randomNumber);
//         if (randomNumber < 0.5) {
//             resolve();
//         } else {
//             reject();
//         }
//     }, 2000);
// })

// x.then(function () {
//     console.log("Resolved");
// })
// .catch(function () {
//     console.log("Rejected");
// })

// console.log("END");


// -----------------------------------------




function fun() {
    
    return new Promise(function (resolve, reject) {

        setTimeout(function () {
            let randomNumber = Math.random();
            
            console.log(randomNumber);
            if (randomNumber < 0.5) {
                resolve();
            } else {
                reject();
            }
        }, 2000);
    })

}

fun().then(function () {
    console.log("Promise Resolved")
})
.catch(function () {
        console.log("Promise rejected");
})






