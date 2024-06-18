
![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)

# ECommerce MySQL Database Manager

Tutorial Video: (https://app.screencastify.com/v3/watch/IuMdzfdMXyajJgX8gdGv)

## Table of Contents
- [Description](#description)
- [Installation/Usage](#installation/usage)
- [Contributing](#contributing)
- [Testing](#testing)
- [License](#license)
- [Questions](#questions)

## Description
The ECommerce MySQL Database Manager allows a user to create, update, and delete data instances relating to ECommerce demands. Currently, the Database Manager is capable of storing Categories by name, which multiple Products may belong to. Products follow a simple data structure, allowing for the following values: Name, Price, and Stock quantity. Products relate to Tags by way of a ProductTag model which stores the id of the product and the id of the tag together in a data.

## Installation/Usage
To use the ECommerce MySQL Database Manager, clone the application directory locally from GitHub (https://github.com/cnnrclvll/ECommerce). In your prefered terminal, navigate to the application directory and type `npm install` to install dotenv, express, mysql, and sequelize packages.  Once you have installed your npm packages, create a new file in your application directory called `.env`. To configure this file, refer to the documentation (https://www.npmjs.com/package/dotenv). Run the command `node server.js` to begin the Database Manager locally on PORT: 3001.  Without closing the first terminal, open a second terminal and navigate to the application directory.  If you wish to seed example data instances, run the command `npm run seed`.  If you wish to begin creating data instances manually, enter the MySQL CLI by running the command `mysql -u root -p` (refer to documentation: (https://www.npmjs.com/package/mysql2)).  Alternatively, if you wish to handle your data using a third-party platform such as Insomnia, simply be sure to send your request to the corresponing PORT: 3001.

## Contributing
To contribute to the project, visit the GitHub repository and share your thoughts via email (see below).

## Testing
Testing has not been set up for this project.

## License
This project is licensed under the Unlicense. A public domain dedication intended to release software into the public domain, waiving all copyright and related rights.

## Questions
If you have any questions, feel free to reach out:

- GitHub: [cnnrclvll](https://github.com/cnnrclvll)
- Email: <a href="mailto:cnnrclvll@gmail.com">cnnrclvll@gmail.com</a>