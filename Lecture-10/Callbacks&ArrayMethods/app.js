

// function fun(x) {
//     // console.log(x);
//     x();
// }

// function innerFun() {
//     console.log('innerFun');
// }

// fun(function innerFun() {
//     console.log('innerFun');
// })


// Array methods - map

function square(num) {
    return num * num;
}



let a = [1, 2, 3, 4, 5];
let b = a.map(square);


let c = a.map(function (n, idx) {
    // console.log(idx);
    return n * n * n;
});


// console.log(b);
// console.log(c);


// filter

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isOdd(num) {
    if (num % 2 !== 0) {
        return true;
    }
    return false;
}

let res = arr.filter(isOdd);
console.log(res);


