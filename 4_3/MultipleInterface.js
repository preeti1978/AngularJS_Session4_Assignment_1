/**start of Typescript
interface drivable{ //defining an interface with only definitions and no implementations
    name: string;//property
    position: string;//property
    start();//method
    drive();//method
    getPosition();//method
}


//defining a flyable interface
interface flyable{
    machNo: number;
    fly();
}

class Helicopter implements flyable{
    machNo = 2;
    fly() {
        console.log("Flying at speed of Mach " + this.machNo);
    }
}

class flyingCar implements drivable, flyable{
    name = "Tarzan super car";
    position = "13 deg N 60 deg E";
    machNo = 1;
    start() {
         console.log("Started " + this.name);
    }
    drive() {
          console.log("driving " + this.name);
    }
    getPosition() {
         console.log("position of " + this.name + " is " + this.position);
    }
    fly() {
        console.log("flying at speed Mach " + this.machNo);
    }
}


let myCar: flyingCar = new flyingCar();//instantiating object of car class
myCar.start();//calling methods on class
myCar.drive();
myCar.getPosition();
myCar.fly();
*/

/**start of transpiled Javsscript****/
var Helicopter = (function () {
    function Helicopter() {
        this.machNo = 2;
    }
    Helicopter.prototype.fly = function () {
        console.log("Flying at speed of Mach " + this.machNo);
    };
    return Helicopter;
}());
var flyingCar = (function () {
    function flyingCar() {
        this.name = "Tarzan super car";
        this.position = "13 deg N 60 deg E";
        this.machNo = 1;
    }
    flyingCar.prototype.start = function () {
        console.log("Started " + this.name);
    };
    flyingCar.prototype.drive = function () {
        console.log("driving " + this.name);
    };
    flyingCar.prototype.getPosition = function () {
        console.log("position of " + this.name + " is " + this.position);
    };
    flyingCar.prototype.fly = function () {
        console.log("flying at speed Mach " + this.machNo);
    };
    return flyingCar;
}());
var myCar = new flyingCar(); //instantiating object of car class
myCar.start(); //calling methods on class
myCar.drive();
myCar.getPosition();
myCar.fly();
