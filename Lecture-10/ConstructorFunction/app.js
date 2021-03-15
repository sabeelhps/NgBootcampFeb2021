// Constructor Function

// function fun(name) {
//     console.log(this);
//     this.name = "Kartik";
// }

// fun();


function Person(name,age) { //constructor function
    this.name = name;
    this.age = age;
    // this.sayHello = function () {
    //     console.log(`Hello from ${this.name}`);
    // }
}

Person.prototype.sayHello=function () {
    console.log(`Hello from ${this.name}`);
}



let p1 = new Person("Kartik", 25);
let p2 = new Person("Prateek", 24);



// Implicit Binding
const obj = {
    name: "Audi",
    price: 10000,
    getPrice: function () {
        console.log(this);
    }
}

// Explicit Binding

function fun(name,age) {
    console.log(this);
    console.log(name);
    console.log(age)
}

const a = {
    l: 10,
    m: 20,
    k:true
}

// fun.call(a, "Kartik", 21);

let f = fun.bind(a);

f("Vivek", 21);

