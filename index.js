// TODO: Include packages needed for this application
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

const inquirer = require("inquirer");

const fileName = "./dist/README.md";
// TODO: Create an array of questions for user input
//const questions = [];

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
      validate: (gituserInput) => {
        if (gituserInput) {
          return true;
        } else {
          console.log("Please enter your GitHub Username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is yoru email address?",
      validate: (gitUserMail) => {
        if (gitUserMail) {
          return true;
        } else {
          console.log("Please enter your email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "title",
      message: "What is the name of your project",
      validate: (projectTitle) => {
        if (projectTitle) {
          return true;
        } else {
          console.log("Please enter your name of your project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of the project",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter your description of the project!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your project have?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
      type: "input",
      name: "dependencies",
      default: "npm i",
      message: "What command should be run to install dependencies? ",
      validate: (dependenciesInput) => {
        if (dependenciesInput) {
          return true;
        } else {
          console.log(
            "Please enter command should be run to install dependencies!"
          );
          return false;
        }
      },
    },
    {
      type: "input",
      name: "test",
      default: "npm test",
      message: "What command should be run to run test? ",
      validate: (testInput) => {
        if (testInput) {
          return true;
        } else {
          console.log("Please enter command should be run to  run test!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "using",
      message: "What does the user need to know about using the repo? ",
      validate: (usingInput) => {
        if (usingInput) {
          return true;
        } else {
          console.log(
            "Please enter the user need to know about using the repo!"
          );
          return false;
        }
      },
    },
    {
      type: "input",
      name: "contributing",
      message:
        "What does the user need to know about contributing to the repo?",
      validate: (contributingInput) => {
        if (contributingInput) {
          return true;
        } else {
          console.log(
            "Please enter the user need to know about contributing to the repo!"
          );
          return false;
        }
      },
    },
  ]);
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("File written successfully\n");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  questions().then((answers) => {
    const readMe = generateMarkdown(answers);
    writeToFile(fileName, readMe);
    console.log("README.md Generated");
  });
}

// Function call to initialize app
init();
