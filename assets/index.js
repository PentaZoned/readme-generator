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

        var stringREADME = generateREADME(data);

        fs.writeFile("README.md", JSON.stringify(stringREADME), (err) =>
        err ? console.log(err) : console.log("Success!")
        );
    })

function generateREADME(data) {
    var templateREADME = `# Template

One paragraph of project description goes here.
    
## Getting Started
    
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
    
### Prerequisites
    
What things you need to install the software and how to install them.
    
```
Give examples
```
    
### Installing
    
A step by step series of examples that tell you how to get a development environment running.
    
Say what the step will be:
    
```
Give the example
```
    
And repeat
    
```
until finished
```
    
End with an example of getting some data out of the system or using it for a little demo.
    
    
## Built With
    
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    
## Deployed Link
    
* [See Live Site](#)
    
    
## Authors
    
* **YOUR NAME** 
    
- [Link to Portfolio Site](#)
- [Link to Github](https://github.com/)
- [Link to LinkedIn](https://www.linkedin.com/)
    
See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.
    
## License
    
This project is licensed under the MIT License 
    
## Acknowledgments
    
* Hat tip to anyone whose code, libraries, packages, or UI was used  / inspired from
* Inspiration
* etc`;

    return templateREADME;
}