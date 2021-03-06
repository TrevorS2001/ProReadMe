// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license'){
    return `
    [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'no license'){
    return `
    ## [License](#table-of-contents)
    The application is covered under the following license:
    ${renderLicenseLink(license)}
    `;
  } else{
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)

  ## [Description](#table-of-contents)
  ${data.description}

  ## [Installation](#table-of-contents)
  ${data.installation}

  ## [Usage](#table-of-contents)
  ${data.usage}
  
  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribution}

  ## [Tests](#table-of-contents)
  ${data.test}

  ## [Questions](#table-of-contents)
  Contact Info:
  [GitHub](https://github.com/${data.username})
  [Email: ${data.email}](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;