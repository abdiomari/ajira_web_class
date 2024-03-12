
document.getElementById('demo').innerHTML = "Hello Welcome to today's Session";
console.log("Hello Welcome to the Console");

//Values 
// Fixed Values 
// Variable values 

// let, var, const 
let x = 10;

let sum = "Hello" + " World"; //Concatenation
console.log(sum)

//ES6 Javascript

{
    var firstName = "Eugene"
}

console.log(firstName)

//Const 
/* cant: 
    reassign a constant value
    reassign a constant array(list)
    reassing a constant object()

    can:
    change the elements of a const array
    change the properties of an object
*/

const pi = 3.142
const cars = ["Mazda", "Toyota", "Mercedes"]

//change an element
cars[1] = "Hyundai";
cars.push("Audi");

console.log(cars)

//Object 

const car = {
    type: "Mazda",
    model: "Axela",
    color: "Wine-red"
}

car.color = "White"
car.owner = "Sarah"
console.log(car)

// const a = 200;
// console.log(a)

// {
//     const a = 100;
//     console.log(a)
// }

// {
//     const a = 150;
//     console.log(a)
// }

/*
Arithmetic - + - * / ** ++ -- %(modulus)
Assignment = += -= *= ___  x = x +y  x+=y
Comparison == === != !== > < <= >=  ?(ternary operator)
String Operators - concatenation
Logical Operators - && || !
Bitwise Operators &  |
Ternary operators
Type operators
*/

console.log(typeof("Abdi"))

let length = 16;
let color = "blue";
let isNight = true;
const person = {firstName:"John", secondName:"Doe"}
const vehicles = ["Axela", "Toyota"]
const date = new Date()

console.log(typeof(length))

let x1;
x1 = "5";
console.log(typeof(x1))

//Booleans 
let f = 5;
let g = 5;
let h = 10;

console.log(f == g)

/*
Functions invoked/called
    when an event occurs
    when it is called 
    Automatic
*/

// function name(parameter){
//     //code to something 
// }

// calculate the product of the two numbers

// function productFunction(a, b, c){
//     return a * b * c
// }

// let call = productFunction(11, 10, 3)
// // console.log(call)
// window.alert(call)

function getDay(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid number";
    }
}

const day = getDay(10);
// window.alert(day);

//Arrow functions 

const productFn = (c,d) => c * d;
const call = productFn(10,20)
// window.alert(call)

const checkNumber = (number) => {
    if (number % 2 == 0){
        return "This is an even number"
    } else {
        return "This is an odd number"
    }
}

let value = checkNumber(200)
// window.alert(value)


const changeText = () => {
    const button = document.getElementById("mybtn");
    button.textContent = "You Clicked Me!";
}