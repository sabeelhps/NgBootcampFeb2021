// Class syntax

class Car{

    constructor(name,price) {
        this.name = name;
        this.price = price;
    }

    getName(){
        return this.name;
    }
    // getter and setter

    get getPrice() {
        return this.price;
    }

    set setPrice(newPrice) {
        this.price = newPrice;
    }

}


class RacingCar extends Car{

    constructor(name, price, maxSpeed, color) {
        super(name, price);
        this.maxSpeed = maxSpeed;
        this.color = color;
    }


    get maximumSpeed() {
        return this.maxSpeed;
    }

}

let c1 = new Car("Audi", 10000);
let c2 = new Car("BMW", 30000);


let r1 = new RacingCar("Ferrari", 10000, 500, "blue");
let r2 = new RacingCar("Bugati", 30000, 500, "white");
