// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = ["what is the title of your project?", "Write a description of your project.", "If applicable, describe the steps required to install your project for the Installation section.", "Provide instructions and examples of your project in use for the Usage section.", "If applicable, provide guidelines on how other developers can contribute to your project.", "If applicable, provide any tests written for your application and provide examples on how to run them.", "choose a license for your project", "What is your GitHub username? (No @ needed)", "What is your Email address?"];


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
        
      const license = answers.license
      
      if (license = "GNU AGPLv3") {
        return license = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
      } 
      else if (license = "GNU GPLv3") {
        return license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      } 
      else if (license = "GNU LGPLv3") {
        return license = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
      } 
      else if (license = "Mozilla Public License 2.0") {
        return license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      }
      else if (license = "Apache License 2.0") {
        return license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      }
      else if (license = "MIT License") {
        return license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      }
      else if (license = "Boost Software License 1.0") {
        return license = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
      } 
      else if (license = "The Unlicense") {
        return license = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
      } else {
        license = ""
      }

      console.log("license",license)

      fs.writeFile("README.md",

` 
${license}
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
