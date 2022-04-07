// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  switch (license) {
    case "MIT":
      return "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)]";
      break;
    case "APACHE 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
      break;
    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
      break;
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
      break;
    case "None":
      return "";
      break;
    default:
      return "";
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  switch (license) {
    case "MIT":
      return "(https://lbesson.mit-license.org/)";
      break;
    case "APACHE 2.0":
      return "(https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPL 3.0":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "BSD 3":
      return "(https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "None":
      return "";
      break;
    default:
      return "";
      break;
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  switch (license) {
    case "MIT":
      return `## License 
      The project is licensed under the MIT license`;
      break;
    case "APACHE 2.0":
      return `## License 
      The project is licensed under the Apache License`;
      break;
    case "GPL 3.0":
      return `## License
      The project is licensed under the GNU General Public License`;
      break;
    case "BSD 3":
      return `## License
      >The project is licensed under 3-Clause BSD License`;
      break;
    case "None":
      return "None";
      break;
    default:
      return "";
      break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //get badge image
  let badge = renderLicenseBadge(data.license);
  //to the image append the badge link
  badge = badge + renderLicenseLink(data.license);
  //get the licence section
  const renderLicense = renderLicenseSection(data.license);

  const empty = " ";
  //return markdown for the README.md
  return `
# ${data.title}

${badge}
  
## Description
### ${data.description}
  
## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicense["None"] ?? `- [License](#license)`}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation
To install necessary dependencies, run the following command:

> ${data.dependencies}

## Usage
${data.using}


${renderLicense["None"] ? "${empty}" : `${renderLicense}`}

## Contributing
${data.contributing}

## Tests
To run tests, run the following command:

>${data.test}

## Questions
If you have any questions about the repo, open an issue or contact me directly at <${
    data.email
  }>. Also you can find my excelente work at [${
    data.github
  }](https://www.github.com/${data.github})
`;
}

module.exports = generateMarkdown;
