"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Hello Mwastafariz!!';
console.log(message);
// We can specify variable type in typescript
var name = 'Mwangi';
var age = 24;
var male = false;
var sentence = "Hey there. I am ".concat(name, ". I am ").concat(age, " years old and I am ").concat(male ? 'male' : 'female');
console.log(sentence);
// Declaring arrays
var names = ['Mwangi', 'Morris', 'Kinuthia', 'Maurice'];
console.log("The names are: ", names);
// You can also do this
var names2 = ['Mwangi', 'Morris', 'Kinuthia', 'Maurice'];
console.log("Names are also: ", names2);
// Arrays with multiple types
var multis = ['Mwas', 24];
console.log("Array with multiple types: ", multis);
// Enums (Readable ways of storing numbers)
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
var c = Colors.Blue;
console.log("The code for color Blue is: ", c);
// Specifying the start of te enum values
var Colors2;
(function (Colors2) {
    Colors2[Colors2["Red"] = 9] = "Red";
    Colors2[Colors2["Green"] = 10] = "Green";
    Colors2[Colors2["Blue"] = 11] = "Blue";
    Colors2[Colors2["Yellow"] = 12] = "Yellow";
})(Colors2 || (Colors2 = {}));
var c2 = Colors2.Blue;
console.log("The code for color Blue is: ", c2);
// The any type
var userInput = 10;
// The below codes will not throw any errors since any type allows re-assignment to any type
// userInput('hey')
userInput.name;
userInput[0];
// The unknown type
var anotherInput = 10;
// Unlike any, unknown will prevent us from accessing inexistent properties etc.
// anotherInput()
// anotherInput[0]
// anotherInput.name
// Type inference
var a;
a = 20;
a = true;
a = 'Hey';
// Type inference only occurs if a variable is initialized
var b = 20;
// b = true // This cannot be coz of type inferencing
// Typescript also allows us to do assign multiple types
var height;
height = 20;
height = 'str';
// Functions with typescript
function add(num1, num2) {
    return num1 + num2;
}
add(1, 2);
// add(1, 'g')
// let sum: string = add(1, 2)
// Optional and default parameters
// Optional parameters
function addem(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
addem(1, 2);
// addem(5, 's')
addem(2); // Not a must to pass the second parameters since its optional
// Default parameters
function addem2(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
addem2(10, 10);
addem2(10);
addem2(5, 5);
// Passing an object as a parameter
function fullName(names) {
    console.log("".concat(names.fname, " ").concat(names.lname));
}
var p = {
    fname: 'Mwangi',
    lname: 'Maurice'
};
fullName(p);
// Our huge object
var interfaceObject = {
    fname: 'Maurice',
    lname: 'Mwangi in Interface',
    age: 24,
    zip: 'stvag',
    height: 65,
    gender: true,
    country: 'Kenya'
};
// Defining a function to handle our huge object the typescript way
function fullNames2(interfaceObject) {
    console.log("".concat(interfaceObject.fname, " ").concat(interfaceObject.lname, " ").concat(interfaceObject.country, " "));
}
// Calling our function with our huge object
fullNames2(interfaceObject);
// Classes in typescript work just like ES6 classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp = new Employee('Mwangi');
console.log(emp.employeeName);
emp.greet();
// Some inheritance in ES6
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name) {
        return _super.call(this, name) || this;
    }
    Manager.prototype.promote = function () {
        console.log("Manager ".concat(this.employeeName, " is promoting hardworking staff!!"));
    };
    return Manager;
}(Employee));
// Initializing objects of child class
var m1 = new Manager('Mwas');
m1.greet();
m1.promote();
console.log("The manager's name is ".concat(m1.employeeName));
// Access modifiers are another topic in typescript
// By default all members of a class are public and can be accessed from outside the class
var EmployeeAccess = /** @class */ (function () {
    function EmployeeAccess(name) {
        this.employeeName = name;
    }
    EmployeeAccess.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return EmployeeAccess;
}());
// We can access the public members like
var emp2 = new EmployeeAccess('Mwastafari');
// console.log(emp2.employeeName) //This throws no erros in the default case, however, 
// making it private or protected in the parent class does
// A private member cannot even be accessed by derived classes 
var Manager2 = /** @class */ (function (_super) {
    __extends(Manager2, _super);
    function Manager2(name) {
        return _super.call(this, name) || this;
    }
    Manager2.prototype.promote = function () {
        console.log("Manager ".concat(this.employeeName, " is promoting hardworking staff!!"));
    };
    return Manager2;
}(EmployeeAccess));
// To access a private member in a derived class, we use the protected access modifier
var m3 = new Manager2('MMK');
m3.promote();
