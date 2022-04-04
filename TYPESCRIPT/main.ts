export {}

let message = 'Hello Mwastafariz!!';
console.log(message);

// We can specify variable type in typescript
let name: string = 'Mwangi'
let age: number = 24
let male: boolean = false

let sentence: string = `Hey there. I am ${name}. I am ${age} years old and I am ${male? 'male': 'female'}`

console.log(sentence)

// Declaring arrays
let names: string[] = ['Mwangi', 'Morris', 'Kinuthia', 'Maurice']
console.log("The names are: ", names)

// You can also do this
let names2: Array<string> = ['Mwangi', 'Morris', 'Kinuthia', 'Maurice']
console.log("Names are also: ", names2)

// Arrays with multiple types
let multis: [string, number] = ['Mwas', 24]
console.log("Array with multiple types: ", multis)

// Enums (Readable ways of storing numbers)
enum Colors {Red, Green, Blue}
let c: Colors = Colors.Blue
console.log("The code for color Blue is: ", c)

// Specifying the start of te enum values
enum Colors2 {Red = 9, Green, Blue, Yellow}
let c2: Colors2 = Colors2.Blue
console.log("The code for color Blue is: ", c2)

// The any type
let userInput: any = 10
// The below codes will not throw any errors since any type allows re-assignment to any type
// userInput('hey')
userInput.name
userInput[0]

// The unknown type
let anotherInput: unknown  = 10
// Unlike any, unknown will prevent us from accessing inexistent properties etc.
// anotherInput()
// anotherInput[0]
// anotherInput.name


// Type inference
let a
a = 20
a = true
a = 'Hey'

// Type inference only occurs if a variable is initialized
let b = 20
// b = true // This cannot be coz of type inferencing

// Typescript also allows us to do assign multiple types
let height: number | string 
height = 20
height = 'str'


// Functions with typescript
function add(num1: number, num2: number): number {
    return num1 + num2
}

add(1, 2)
// add(1, 'g')
// let sum: string = add(1, 2)


// Optional and default parameters
// Optional parameters
function addem(num1: number, num2?: number): number {
    if(num2) return num1 + num2
    else return num1
} 

addem(1, 2) 
// addem(5, 's')
addem(2) // Not a must to pass the second parameters since its optional


// Default parameters
function addem2(num1: number, num2: number = 10): number {
    if(num2) return num1 + num2
    else return num1
}

addem2(10, 10)
addem2(10)
addem2(5, 5)


// Passing an object as a parameter
function fullName(names: {fname: string, lname: string}) {
    console.log(`${names.fname} ${names.lname}`)
}

let p = {
    fname: 'Mwangi',
    lname: 'Maurice'
}

fullName(p)

// Imagine if our object had numerous items e.g. 10. We use interfaces in such cases
interface pi {
    fname: string,
    lname: string,
    age: number,
    zip: string,
    height: number | string,
    gender: boolean,
    country: string,
    city?: string
}

// Our huge object
const interfaceObject = {
    fname: 'Maurice',
    lname: 'Mwangi in Interface',
    age: 24,
    zip: 'stvag',
    height: 65,
    gender: true,
    country: 'Kenya',
}

// Defining a function to handle our huge object the typescript way
function fullNames2(interfaceObject: pi) {
    console.log(`${interfaceObject.fname} ${interfaceObject.lname} ${interfaceObject.country} `)
}

// Calling our function with our huge object
fullNames2(interfaceObject)

// Classes in typescript work just like ES6 classes
class Employee {
    constructor(name) {
        this.employeeName = name
    }

    employeeName: string

    greet() {
        console.log(`Good Morning ${this.employeeName}`)
    }
}

const emp = new Employee('Mwangi')
console.log(emp.employeeName)
emp.greet()

// Some inheritance in ES6
class Manager extends Employee {
    constructor(name) {
        super(name)
    }

    promote() {
        console.log(`Manager ${this.employeeName} is promoting hardworking staff!!`)
    }
}

// Initializing objects of child class
const m1 = new Manager('Mwas')
m1.greet()
m1.promote()
console.log(`The manager's name is ${m1.employeeName}`)

// Access modifiers are another topic in typescript
// By default all members of a class are public and can be accessed from outside the class
class EmployeeAccess {
    constructor(name) {
        this.employeeName = name
    }

    protected employeeName: string

    greet() {
        console.log(`Good Morning ${this.employeeName}`)
    }
}

// We can access the public members like
const emp2 = new EmployeeAccess('Mwastafari')
// console.log(emp2.employeeName) //This throws no erros in the default case, however, 
// making it private or protected in the parent class does

// A private member cannot even be accessed by derived classes 
class Manager2 extends EmployeeAccess {
    constructor(name) {
        super(name)
    }

    promote() {
        console.log(`Manager ${this.employeeName} is promoting hardworking staff!!`)
    }
}

// To access a private member in a derived class, we use the protected access modifier
const m3 = new Manager2('MMK')
m3.promote()