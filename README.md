# BANGAZON WORKFORCE HUMAN RESOURCES INFORMATION SYSTEM

## BANGAZON WORKFORCE HRIS SYSTEM

This system allows users to view, create, edit, and delete a list of: employees, departments, employee utilized computers, and employee training programs.

## Table of Contents
1. [Software Requirements](#software-requirements)
1. [Insallation](#installation)
1. [Get Started](#get-started)
1. [Helper Applications](#helper-applications)
1. [Third Party Libraries](#third-party-libraries)
1. [Usage Directions](#usage-directions)
1. [Credits](#credits)
1. [Contribute to the CLI](#contribute-to-cli)

## Software Requirements
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

## Installation
- To clone the project down, run  ```git clone [repo link]```
- Run ```npm install``` from the root of the directory to install all of the dependencies

## Get Started
- set up the database using ```npm run db:reset``` command in terminal
- run ```npm start``` from the terminal

## Helper Applications
- [PostgreSQL](http://www.postgresapp.com)

## Third Party Libraries
- [express](https://www.expressjs.com)
- [pug](https://www.pugjs.org)
- [sequelize](https://www.docs.sequelizejs.com)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [bootstrap](https://www.getbootstrap.com)
- [popper.js](https://www.popperjs.org)
- [chai](https://www.chaijs.com)
- [mocha](https://www.mochajs.org)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [jsdoc](https://www.usejsdoc.org)

## Usage directions

### Main Menu
Users will land on the home page of Bangazon Workforce Management where they will see a breif outline
of the functionality of the database

<img width="1419" alt="homepagess" src="https://user-images.githubusercontent.com/21187281/31623710-f5e28c44-b265-11e7-9c08-33bc7a5b7087.png">















































### Contributing

#### Sequelize config.json:
You may need to add your psql username and password the the development database in the /config/config.json file.  For this reason, it has been .gitignored.  There is, however, a config.json.example. Copy all from the .example file, paste into a new config.json file in the /config folder, and try as is before adding your user/password to the development config info.

#### Note on Model/Migration creation:
We are using snake_case for our database attribute names.  By default, sequelize uses camelCase, which comes into play for the auto-generated updatedAt and createdAt attributes.  To avoid this, please use the --underscored argument when creating the model via sequelize cli. Example:
```sequelize model:create --name [model] --underscored --attributes [attributes].```
