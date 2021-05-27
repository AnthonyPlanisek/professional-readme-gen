// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = ["what is the title of your project?", "Write a description of your project.", "If applicable, describe the steps required to install your project for the Installation section.", "Provide instructions and examples of your project in use for the Usage section.", "If applicable, provide guidelines on how other developers can contribute to your project.", "If applicable, provide any tests written for your application and provide examples on how to run them.", "choose a license for your project", "What is your GitHub username? (No @ needed)", "What is your Email address?"];
console.log(questions[8])

inquirer
    .prompt([
        {
        type: "input",
        name: "title",
        message: questions[0],
        },
        {
        type: "input",
        name: "description",
        message: questions[1],
        },
        {
        type: "input",
        name: "install",
        message: questions[2],
        },
        {
        type: "input",
        name: "userInfo",
        message: questions[3],
        },
        {
        type: "input",
        name: "contribution",
        message: questions[4],
        }, 
        {
        type: "input",
        name: "test",
        message: questions[5],
        },
        {
        type: "list",
        name: "license",
        message: questions[6],
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        },
        {
        type: "input",
        name: "github",
        message: questions[7],
        },
        {
        type: "input",
        name: "email",
        message: questions[8],
        },
    ])
    .then((answers) => {
        console.log(answers)
        
        fs.writeFile("README.md",

` 
# ${answers.title}
## Description
${answers.description}
## Install Guide
${answers.install}
## UsageInfo
${answers.userInfo}
## How to contribute
${answers.contribution}
## Tests for the application
${answers.test}
## license
${answers.license}
## Github username
${answers.github}
## Email
${answers.email}
`

        , function (err) {
            if (err) throw err;
            console.log('Saved!');
        
        
        
        
        
        })



      })
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
