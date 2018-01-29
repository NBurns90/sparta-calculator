// Calculator

// Calculator Basic or Advanced Select
alert("Welcome to super advanced Calculator 1.0")

var calctype = prompt("Would you like to perform basic or advanced operations? (1) Basic (2) Advanced");

if (calctype == 1) {
  alert("You have selected the Basic version")
  alert("You will now be prompted to enter a number followed by an operation followed by another number until you resolve the equation with the equals operator");
} else {
  alert("You have selected the Advanced version")
  alert("You will now be prompted to enter a number and select a function")
}

// Calculator basic
if (calctype == 1) {
  var num1 = parseInt(prompt("Please enter a number:"));
  var operation_input = prompt("Please enter an operation: (*) (/) (+) (-)");
  var num2 = parseInt(prompt("Please enter a number:"));
} else {
  throw "AdvancedCalcError"
}

// Basic Calculator Functionality
var result;

if (operation_input === "*") {
    result = (num1 * num2);
  } else if (operation_input === "/") {
    result = (num1 / num2);
  } else if (operation_input === "+") {
    result = (num1 + num2);
  } else if (operation_input === "-"){
    result = (num1 - num2);
  } else {
    alert("You haven't entered a vaild operation!")
    throw InvalidOperation
  }

console.log(num1, operation_input, num2);
console.log(result);
