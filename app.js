// Calculator

// Calculator Basic or Advanced Select
alert("Welcome to super advanced Calculator 1.0")

var calctype = prompt("Would you like to perform basic or advanced operations? (1) Basic (2) Advanced");

if (calctype == 1) {
  alert("You have selected the Basic version")
  alert("You will now be prompted to enter a number followed by an operation followed by another number until you resolve the equation with the equals operator");
} else {
  alert("You have selected the Advanced version")
  alert("You will now be prompted to select a function and then enter a number you'd like to perform the function on")
}

// Define all variables for basic and advanced input
var num1;
var num2;
var operation_input;
var function_input;

// Calculator basic and advanced prompts
if (calctype == 1) {
  num1 = parseInt(prompt("Please enter a number:"));
  operation_input = prompt("Please enter an operation: (*) (/) (+) (-)");
  num2 = parseInt(prompt("Please enter a number:"));
}
  else if (calctype == 2) {
    function_input = prompt("Please select the function you'd like to use: (1)Square Root (2)Power");
    if (function_input == 1) {
      num1 = parseInt(prompt("Please enter the number you'd like to Square Root:"));
    }
      else {
        num1 = parseInt(prompt("Please enter the number you'd like to use as your base:"));
        num2 = parseInt(prompt("Please enter the number you'd like to use as your exponent:"));
      }
  }



// Basic Calculator Functionality and Results
// Define variables for results
var result;

if (calctype == 1) {
  if (operation_input === "*") {
      result = (num1 * num2);
      console.log(num1, operation_input, num2);
  } else if (operation_input === "/") {
      result = (num1 / num2);
      console.log(num1, operation_input, num2);
  } else if (operation_input === "+") {
      result = (num1 + num2);
      console.log(num1, operation_input, num2);
  } else if (operation_input === "-"){
      result = (num1 - num2);
      console.log(num1, operation_input, num2);
  } else {
      alert("You haven't entered a vaild operation!")
      throw InvalidOperationError
  }
}

  // Advanced Calculator Functionality
  else {
    if (function_input == 1) {
      result = Math.sqrt(num1);
      console.log(num1);
    }
    else {
      result = Math.pow(num1, num2);
      console.log(num1, num2);
    }
  }

console.log(result);
