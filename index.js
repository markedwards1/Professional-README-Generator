// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs/promises');
const generateMarkdown = require('./utils/generateMarkdown');
//const Choices = require('inquirer/lib/objects/choices');
const path = require('path')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title'
    },
    {
        type: 'input',
        message: "Discribe your project?",
        name: 'discription'
    },
    {
        type: 'input',
        message: "How do you install your project?",
        name: 'installation'
    },
    {
        type: 'input',
        message: "What is this project use for?",
        name: 'usage'
    },
    {
        type: 'input',
        message: "What are your contribution guidelines?",
        name: 'contribution'
    },
    {
        type: 'input',
        message: "How do you test your project?",
        name : 'test'
    },
    {
        type: 'list',
        message : "Which licences have you used?",
        name : 'licences',
        choices : [
            'afl-3.0',
            'apachie-2.0',
            'artistic-2.0',
            'none'

        ]
    },
    {
        type: 'input',
        message: "what is your gitHub username?",
        name: 'github'
    },
    {
        type: 'input',
        message: "what is your email?",
        name: 'email'
    }
]


// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    //function to write file to markdown-file location
    .then((data) => {
     const readme = generateMarkdown(data);
     const markdownFilePath = path.join(__dirname, 'markdown-file', 'README.md');
     fs.writeFile(markdownFilePath, readme, 'utf-8')
     .then(()=>{
        console.log("success!")
     })
     .catch((err) => {
        console.log("something went wrong!")
     })
    })
};


// Function call to initialize app
init();
