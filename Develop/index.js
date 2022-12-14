const gen_md = require('./utils/generateMarkdown.js');
const inq = require('inquirer');
const fs = require('fs');

// Questions for user input to define the README
const questions = 
[
    // Project Title
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'project_name'
    },
    // Project Description
    {
        type: 'input',
        message: 'Please provide a description of your project:',
        name: 'description'
    },
    // Installation Instructions
    {
        type: 'input',
        message: 'Please provide any installation instructions:',
        name: 'install_instructions'
    },
    // Intended Usage
    {
        type: 'input',
        message: 'What is the intended usage for this project',
        name: 'usage'
    },
    // Contribution Guidelines
    {
        type: 'input',
        message: 'Please provide contribution guidelines:',
        name: 'contribution_guide'
    },
    // Performing Tests
    {
        type: 'input',
        message: 'Please provide how to perform tests:',
        name: 'tests'
    },
    // Project License
    {
        type: 'list',
        message: 'Which of the following licenses does your project have?',
        choices: 
        [
            'public domain',
            'open source',
            'permissive licensing',
            'copylefted',
            'proprietary',
            'There is no license for this project'
        ],
        name: 'licenses'
    },
    // GitHub Profile
    {
        type: 'input',
        message: 'What is your github profile name (e.g. octocat)?',
        name: 'github_profile'
    },
    // Email Address
    {
        type: 'input',
        message: 'What is your email address (e.g. example@domain.com)?',
        name: 'email'
    }
];

// Write README file based on user input
function writeToFile(fileName, data) 
{
    // Generate the README file contents
    const README = gen_md(data);

    // Write the README file defined by fileName and file contents
    fs.writeFile
    (
        fileName, README,
        (error) => error ? console.log(error) : console.log('The file was successfully created!')
    );
}

// Initializes app
function init() { inq.prompt(questions).then ( answers => writeToFile('README.md', answers) ); }

// Function call to initialize app
init();
