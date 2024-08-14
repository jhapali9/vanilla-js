
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

