function generateBadge(licences){
  const licenseName = encodeURIComponent(licences.replace('-', ' '))
  return `![${licences}-licenced](https://img.shields.io/badge/license-${licenseName}-green)`;
}

//function to create markdown. 

function generateMarkdown(data) {
  const {
    title,
    discription,
    installation,
    usage,
    contribution,
    test,
    licences,
    github,
    email,

  } = data;
  return `
  # ${title}
 ${generateBadge(licences)}
 
 The content of this site is licensed under ${licences} License
  ## Discription
  ${discription}
  ## Table of Contents
  - [Installation](#instalation)
  - [Usage](#usage)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Testing](#testing)
  - [Questions](#questions)

  ## Instalation
  ${installation}
  ## Usage
  ${usage}
  ## Contribution Guidelines
  ${contribution}
  ## Testing
  ${test}
  
  
  ## Questions
  You reach me via my github or email:
  [GitHub](https://github.com/${github})
  Email: ${email}

`;
}

module.exports = generateMarkdown;
