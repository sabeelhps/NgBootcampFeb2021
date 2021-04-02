// const math = require('./math');
const { square, add, PI } = require('./math');


// console.log(math);
// console.log(math.square(7));
// console.log(math.add(3, 4));

console.log(square(6));
console.log(add(6, 6));
console.log(PI);


const person = {
    name: "Kartik",
    age: 25,
    favColor:'blue'
}

const { name, age,favColor } = person;

console.log(name);
console.log(age);
console.log(favColor)