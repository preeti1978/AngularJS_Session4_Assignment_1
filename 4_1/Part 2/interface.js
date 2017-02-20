/***start of typescript
interface drivable{ //defining an interface with only definitions and no implementations
    name: string;//property
    position: string;//property
    start();//method
    drive();//method
    getPosition();//method
}

class car implements drivable{//class implements interface
    name = "Honda City";//defining all properties of interface
    position = "8 deg N, 81 deg E";
    start() {//implementing start method
        console.log("Started " + this.name);
    }
    drive() {//implementing drive method
        console.log("driving " + this.name);
    }
    getPosition() {//implementing getPosition method
        console.log("position of " + this.name + " is " + this.position);
    }
}

let myCar: car = new car();//instantiating object of car class
myCar.start();//calling methods on class
myCar.drive();
myCar.getPosition();
***/
/**transpiled javscsript of the typescript**/
var car = (function () {
    function car() {
        this.name = "Honda City"; //defining all properties of interface
        this.position = "8 deg N, 81 deg E";
    }
    car.prototype.start = function () {
        console.log("Started " + this.name);
    };
    car.prototype.drive = function () {
        console.log("driving " + this.name);
    };
    car.prototype.getPosition = function () {
        console.log("position of " + this.name + " is " + this.position);
    };
    return car;
}());
var myCar = new car(); //instantiating object of car class
myCar.start(); //calling methods on class
myCar.drive();
myCar.getPosition();
