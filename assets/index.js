const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([ 
        {
            type: 'input',
            message: "What is your title of your project?",
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
            type: 'input',
            message: "What is the usage information?",
            name: 'usageInfo',
        },
        {
            type: 'input',
            message: "What are the contribution guidelines?",
            name: 'contribGuide',
        },
        {
            type: 'input',
            message: "What are the test instructions?",
            name: 'testInstruct',
        },
        {
            type: 'checkbox',
            message: "Which licenses do you want to include?",
            choices: ["MIT", "IBM", "ISC", "Mozilla"],
            name: 'licenseList',
        },
        {
            type: 'input',
            message: "What is your Github username?",
            name: 'githubUsername',
        },
        {
            type: 'input',
            message: "What is your contact email address?",
            name: 'email',
        },
    ])
    .then((data) => {
        console.log(data);


        fs.writeFile("README.md", JSON.stringify(data), (err) =>
        err ? console.log(err) : console.log("Success!")
        );
    })