#! /usr/bin/env node

import inquirer from "inquirer";

let Loop = true;
while(Loop){
const answer = await inquirer.prompt([
   { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  { 
    message: "Select one of the operator to perform calculation",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// conditional statements
if (answer.Operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.Operator === "Subtraction"){
  console.log(answer.firstNumber - answer.secondNumber);
}else if (answer.Operator === "Multiplication"){
  console.log(answer.firstNumber * answer.secondNumber);
}else if (answer.Operator === "Division"){
  console.log(answer.firstNumber / answer.secondNumber);
}else {
  console.log("Please select valid operator");
}
const  calculateMore = await inquirer.prompt({
  type: "confirm",
  name: "more",
  message: "Do you want more calculation?",
  default: false

});
if(!calculateMore.more){
  Loop = false;
  console.log("\n Thank you!")
}
}