// Loops


// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)

// for(initilisation ; condition check;updation){

    // your code goes here
// }

// for (let i = 0; i < 10; i++){
//     console.log(i);
// }



// for (let i = 1; i <= 10; i++){

//     if (i === 5) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// While loops

// let num = 10;

// while (num >= 0) {
//     console.log(num);
//     num--;
// }

// for-of loops 

// let arr = ["blue", "red", "green", "orange"];

// for (let color of arr) {
//     console.log(color);
// }

// for-in loops


const car = {
    name: "Audi",
    price: 10000,
    isDiscBrake: true,
    
}

for (let item in car) {
    console.log(`${item} --> ${car[item]}`);
}

