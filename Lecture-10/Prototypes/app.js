
const person = {
    
    name: "Kartik",
    age: 21,
    sayHello: function () {
        console.log("Hello Every One");
    }
}

let p1 = Object.create(person);
let p2 = Object.create(p1);

