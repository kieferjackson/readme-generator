// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) 
{
	switch(license)
	{
		case 'There is no license for this project':
			return '';
		default: 
			let license_trim = license.replace(/ /g, '%20');
			return `![License](https://img.shields.io/badge/license-${license_trim}-blue)`;
	}
}

// Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) 
{
	switch(license)
	{
		case 'There is no license for this project':
			return '';
		default: 
			return '- [License](#license)';
	}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) 
{
	switch(license)
	{
		case 'There is no license for this project':
			return '';
		default: 
		let license_section = `## License
Licensed under ${license}`;

		return license_section;
	}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	const { project_name, description, install_instructions, usage, contribution_guide, tests, licenses, github_profile, email } = data;
    return `# ${project_name}

${renderLicenseBadge(licenses)}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(licenses)}
## Installation
${install_instructions}

## Usage
${usage}

## Contributing
${contribution_guide}

## Tests
${tests}

## Questions
If you have any questions related to this project, contact through my [GitHub](https://github.com/${github_profile}) or contact at the following email address: [${email}](${email})

## Credits
This project was developed by [${github_profile}](https://github.com/${github_profile})

${renderLicenseSection(licenses)}
`;
}

module.exports = generateMarkdown;
