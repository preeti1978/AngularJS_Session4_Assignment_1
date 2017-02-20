/*****This is the original ts file**************

class Greeter { //greeter class
    greeting: string; //property greeting message
    constructor(message: string) { //constructor
        this.greeting = message;
    } //end constructor
    greet() { //greett function
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");//creating object of Greeter class

let button = document.createElement('button'); //adding a DOM element button
button.textContent = "Say Hello";//label of button
button.onclick = function() {
    alert(greeter.greet());//on click of button, invoking the greet() function of Greeter object
}

document.body.appendChild(button);

****/
/***this is the transpiled js of the greetings.ts***/
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);