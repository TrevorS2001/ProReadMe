// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./Develop/utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    message:'What is your Github Username?',
    name: 'username'
    },
    {
        type: 'input',
        message:'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'project'
    },
    {
        type: 'input',
        message: 'Enter a short description of your project:',
        name: 'description'
    },
    {
        type: 'input',
        message:'Which command to run to install dependencies?',
        name:'installation'
    },
    {
        type: 'input',
        message: 'What does the user need to know about the repo?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What does user need to know about contributing to the repo?',
        name: 'contribution'
    },
    {
        type: 'input',
        message:'What command for testing?',
        name: 'test'
    },
    {
        type: 'list',
        message: 'What kind of license should the project have?',
        name: 'license',
        choices: [
            'GPL',
            'BSD',
            'MIT',
            'APACHE',
            'None'
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let content = generateMarkdown(data);
    fs.writeFile(fileName, content, function(error){
        if(error){
            return console.log(error)
        }
        console.log('success')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data){
        var fileName = 'README.md';
        writeToFile(fileName, data)
    });
}

// Function call to initialize app
init();