#! /usr/bin/env node

import inquirer from "inquirer";

let todos = [];
let condition = true;

while (condition) {
  let todoQuestion = await inquirer.prompt([
    {
      name: "firstQuestion",
      type: "input",
      message: "What do you want to add in your todos?",
    },
    {
      name: "secondQuestion",
      type: "confirm",
      message: "Would you like to add more in your todos?",
      default: "false",
    },
  ]);

  todos.push(todoQuestion.firstQuestion);
  condition = todoQuestion.secondQuestion;
  console.log(todos);
}
