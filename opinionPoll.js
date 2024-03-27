"use strict";

import inquirer from "inquirer";

const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your name?",
  },
  {
    type: "list",
    name: "languages",
    message: "Which of these is your favorite programming language?",
    choices: ["JavaScript", "Python", "Ruby", "Other"],
  },
  {
    type: "list",
    name: "editors",
    message: "Which editor do you prefer?",
    choices: ["VS Code", "Sublime Text", "Atom", "Other"],
  },
  {
    type: "input",
    name: "feature",
    message: "What's one feature you wish your editor had?",
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(
    `Hello, ${answers.username}. Your favorite programming language is ${answers.languages}. Your favorite editor is ${answers.editors}. A feature you wish your editor had is: ${answers.feature}.`
  );
});
