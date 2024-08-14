
// assigning as value to a variable (without es6 syntax i.e arrow function)
function greet(){
    console.log("hello world")
}
var display = greet;
display()

// assigning as value to a variable using function (another way) 
var display = function greet() {
    console.log("hello world")
}
display()

// assigning as value to a variable using anonymous function (without es6 syntax i.e arrow function)
var display = function(){
    console.log("hello world")
}
display()

// assigning as value to a variable using anonymous function (using es6 syntax i.e arrow function)
var display = () => {
    console.log("hello world")
}
display()

// passing a function as an argument
// We are passing our sayHello() function as an argument to the message() function, this explains how we are treating the function as a value
// The function that we pass as an argument to another function is called a callback function. sayHello() is a callback function
function sayHello(){
    return "Hello"
}

function message(sayHello,name){
    console.log(sayHello()+" "+name+"!")
}

message(sayHello,"Bhola")

// returning a function
//In this example, we are returning a function from another function - We can return a function because functions in JavaScript are treated as values.
function hello(){
    return () => {
        console.log("Function returning a function")
    }
}
hello()()

