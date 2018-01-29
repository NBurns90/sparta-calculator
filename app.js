// Calculator

// Calculator Basic or Advanced Select
alert("Welcome to super advanced Calculator 1.0")

var calctype = prompt("Which Calculator would you like to use? (1)Basic, (2)Advanced, (3)BMI, (4)Trip");

if (calctype == 1) {
    alert("You have selected the Basic version")
    alert("You will now be prompted to enter a number followed by an operation followed by another number until you resolve the equation with the equals operator")
} else if (calctype == 2) {
    alert("You have selected the Advanced version")
    alert("You will now be prompted to select a function and then enter a number you'd like to perform the function on")
  }
  else if (calctype == 3) {
    alert("You have selected the BMI Calculator")
    alert("You will now be asked in which units you'd like to input.  You will then be asked for your weight and height")
  }
  else if (calctype == 4) {
    alert("You have selected the Trip Calculator")
    alert("You will now be required to enter Distance, MPG, CostPerGallon, Speed")
  }
  else {
    alert("You have not entered a valid Calculator type!")
    throw InvalidCalcSelection
  }

// Define all variables for basic and advanced input
// basic and advanced calculator variables
var num1;
var num2;
var operation_input;
var function_input;

// BMI variables
var bmi;
var height;
var weight;
var units;

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
  else if (calctype == 3) {
    units = parseInt(prompt("Would you like to input your height and weight in (1)Metric or (2)Imperial units?"));
    if (units == 1) {
      height = parseInt(prompt("Please enter your height in centimeters:"));
      weight = parseInt(prompt("Please enter your weight in kilograms:"));
    }
    else if (units == 2) {
      height = parseInt(prompt("Please enter your height in inches:"));
      weight = parseInt(prompt("Please enter your weight in pounds:"));
    }
    else {
      alert("You have not entered a valid value in the prompt!")
      throw InvalidInputError
    }
  }
  else { (calctype) ==4
    // Trip Calculator
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
  console.log(result);
}

  // Advanced Calculator Functionality
  else if (calctype == 2) {
    if (function_input == 1) {
      result = Math.sqrt(num1);
      console.log(num1);
    }
    else {
      result = Math.pow(num1, num2);
      console.log(num1, num2);
    }
    console.log(result);
  }

  //BMI Calculator Functionality
  else if (calctype == 3) {
    if (units == 1) {
      bmi = (weight/(Math.pow((height/100), 2)));
    }
    else {
      bmi = (weight/(Math.pow(height, 2)))*703.0704;
    }
    if (bmi < 18.5) {
      console.log("You need to eat more!");
      console.log(bmi);
      console.log(height);
      console.log(weight);
    }
    else if (bmi <=24) {
      console.log("You're a healthy weight");
      console.log(bmi);
      console.log(height);
      console.log(weight);
    }
    else {
      console.log("You're going to die soon");
      console.log(bmi);
      console.log(height);
      console.log(weight);
    }
  }
