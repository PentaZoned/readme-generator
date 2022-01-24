const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([ 
        {
            type: 'input',
            message: "What is your name of your project?",
            name: 'projectName',
        },
        {
            type: 'input',
            message: "Please give a short description of your project.",
            name: 'projectDesc',
        },
        {
            type: 'input',
            message: "What are the installation steps?",
            name: 'installSteps',
        },
        {
            type: 'checkbox',
            message: "What are the technologies used?",
            choices: ["HTML5", "CSS", "JavaScript", "jQuery"],
            name: 'techUsed',
        },
    ])
    .then((data) => {
        console.log(data);

        fs.writeFile("README.md", JSON.stringify(data), (err) =>
        err ? console.log(err) : console.log("Success!")
        );
    })