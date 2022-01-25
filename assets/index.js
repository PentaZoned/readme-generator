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
    .then((data) => {
        console.log(data);

        var stringREADME = generateREADME(data);

        fs.writeFile("README.md", stringREADME, (err) =>
        err ? console.log(err) : console.log("Success!")
        );
    })

function generateREADME(data) {

    var licenseBadge;
    if(data.license == 'MIT'){
        licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

    } else if (data.license == 'IBM') {
        licenseBadge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";

    } else if (data.license == 'ISC') {
        licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";

    } else {
        licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    };

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

![Example](assets/images/example.png)

## Tests

${data.testInstruct}

## Questions

- [Link to Github](https://github.com/${data.githubUsername})
- [Contact Email](mailto:${data.email})

## Contributing

${data.contribGuide}
      
## License
    
This project is licensed under the ${data.license} License`;

    return templateREADME;
}