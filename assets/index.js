// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    // Prompts shown to users
    .prompt([ 
        {
            type: 'input',                                      // Type of input
            message: "What is your title of your project?",     // Message or question displayed to the user
            name: 'projectName',                                // Variable name
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
            choices: ["MIT", "IBM", "ISC", "Mozilla"],          // An array of choices
            name: 'license',
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
    .then((data) => {           // work to be done after the prompts have been answered
        console.log(data);
        // a reference variables with a template literal from generateREADME() function
        var stringREADME = generateREADME(data);

        // writes a new file called README.md and stores the contents of stringREADME into it
        fs.writeFile("README.md", stringREADME, (err) =>
        // console.log error if unsuccessful, console.log success message otherwise
        err ? console.log(err) : console.log("Success!")
        );
    })

// Function is used to generate the template literal with the user's information
function generateREADME(data) {

    // variable to hold code for the badge
    var licenseBadge;
    // checks the license and assigns the code according to the license
    // checks and assigns for MIT 
    if(data.license == 'MIT'){
        licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    // checks and assigns for IBM 
    } else if (data.license == 'IBM') {
        licenseBadge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    // checks and assigns for ISC
    } else if (data.license == 'ISC') {
        licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    // checks and assigns for Mozilla
    } else {
        licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    };

    // variable will hold the entire template literal
    var templateREADME = `# ${data.projectName}

## Description

${data.projectDesc}

${licenseBadge}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Questions](#questions)
* [Contributing](#contributing)
* [License](#license)
    
## Installation
    
${data.installSteps}
        
## Usage

${data.usageInfo}

## Tests

${data.testInstruct}

## Questions

- [Link to Github](https://github.com/${data.githubUsername})
- [Contact Email](mailto:${data.email})

## Contributing

${data.contribGuide}

* [Contributor Convenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md)
      
## License
    
This project is licensed under the ${data.license} License`;

    // return the entire template literal
    return templateREADME;
}