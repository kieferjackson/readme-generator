// TODO: Include packages needed for this application
const gen_md = require('./utils/generateMarkdown.js');
const inq = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = 
[
    // Project Title
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Please provide a description of your project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please provide any installation instructions:',
        name: 'install_instructions'
    },
    {
        type: 'input',
        message: 'What is the intended usage for this project',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please provide contribution guidelines:',
        name: 'contribution_guide'
    },
    {
        type: 'input',
        message: 'Please provide how to perform tests:',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Which of the following licenses does your project have?',
        choices: 
        [
            'public domain',
            'open source',
            'permissive licensing',
            'copylefted',
            'proprietary'
        ],
        name: 'licenses'
    },
    {
        type: 'input',
        message: 'What is your github profile name (e.g. octocat)?',
        name: 'github_profile'
    },
    {
        type: 'input',
        message: 'What is your email address (e.g. example@domain.com)?',
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
