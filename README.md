# BANGAZON WORKFORCE MANAGEMENT

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

### View All Employees (#1)
Users may access a list of all employees in the database by clicking the 'Employees' tab in the navigation menu.

<img width="1431" alt="employeelistss" src="https://user-images.githubusercontent.com/21187281/31623643-b7085062-b265-11e7-9a77-8caf90e1b11b.png">

### Add an Employee to Database (#2)
Users may add an employee to the employee list by clicking the 'Add Employee' button at the
top of the employee list. They will be redirected to a form that they can fill out and submit with the
new employee's information.

<img width="1439" alt="addemployeess" src="https://user-images.githubusercontent.com/21187281/31634369-db603a2e-b288-11e7-8e42-34cbc23dd349.png">

### View Employee Details (#3)
Users may view individual employee details by clicking the 'View' button to the right of an individuals
name on the employee list. They will then be able to view an employee's name, associated department,
assigned computers, and training programs the employee has attended.

<img width="1431" alt="employeedetailsss" src="https://user-images.githubusercontent.com/21187281/31634609-c038c576-b289-11e7-8de5-33bb84804f1a.png">

### Edit Employee Information (#4)
Users may edit employee information by clicking the 'Edit' button undeneath 'Employee Details'. They will then be able to edit an employee's name, association with department, and assigned computer(s).

<img width="1436" alt="editemployeedetailsss" src="https://user-images.githubusercontent.com/21187281/31635199-8fc34888-b28b-11e7-9059-72dad277aa5e.png">

### View All Departments (#5)
Users may access a list of all departments in the database by clicking the 'Departments' tab in the navigation menu.

<img width="1439" alt="departmentlistss" src="https://user-images.githubusercontent.com/21187281/31672490-505f127a-b322-11e7-94bb-2c7f1dfdf723.png">

### Add a Department (#6)
Users may add a new department to the departments list by clicking the 'Create Department' button. They will be redirected to a form that they can fill out and submit with the
new department name, the department's expense budget, and the department supervisor.

<img width="1429" alt="createnewdeptss" src="https://user-images.githubusercontent.com/21187281/31672851-3bd3ddf8-b323-11e7-89f2-80e57ee7f13b.png">

### View Department Details (#7)
Users may view individual department details by clicking the 'View' button to the right of an individual department name on the departments list. They will then be able to see a list of employees that belong to that specific department.

<img width="1436" alt="deptdetailsss" src="https://user-images.githubusercontent.com/21187281/31673218-4481e0d4-b324-11e7-9f31-cdaafbf3c6fe.png">

### View All Computers (#8)
Users may access a list of all computers in the database with their associated serial numbers by clicking the 'Computers' tab in the navigation menu.

<img width="1434" alt="viewallcomputersss" src="https://user-images.githubusercontent.com/21187281/31674578-c6c83022-b327-11e7-98a9-d61eb080787a.png">

### Add a Computer to the Database (#8)
Users may add a new computer to the computers list by clicking the 'Create New' button at the top of the computers list. They will be redirected to a form that they can fill out and submit with the
new computer's manufacturer, model, serial number, and purchase date.

<img width="1437" alt="addcomputerss" src="https://user-images.githubusercontent.com/21187281/31675049-26f0c986-b329-11e7-8dfd-7657134d9783.png">

### Delete a Computer from the Database (#8)
Users may delete a computer from the computers list by first clicking on the serial number of the individual computer they wish to delete and then clicking the 'Delete' button.

<img width="1434" alt="deletecomputerss" src="https://user-images.githubusercontent.com/21187281/31675500-7407c1ba-b32a-11e7-94b4-bda92ea33a0b.png">

### View All Training Programs (#9)
Users may access a list of all training programs in the database with their associated program descriptions, and start and end dates by clicking the 'Training' tab in the navigation menu.

<img width="1436" alt="trainingprogramslistss" src="https://user-images.githubusercontent.com/21187281/31675702-10d25d52-b32b-11e7-819f-70c3cd841b0b.png">

### Add a Training Program to the Database (#9)
Users may add a new training program to the training programs list by clicking the 'Add Training Program' button at the top of the training programs list. They will be redirected to a form that they can fill out and submit with the
new training programs's title, max attendance number, description, start and end date.

<img width="1437" alt="createtrainingss" src="https://user-images.githubusercontent.com/21187281/31676140-4bc99a8c-b32c-11e7-99ed-fef22ad641bc.png">

### Edit Training Program Details (#10)
Users may

<img width="1438" alt="edittrainingss" src="https://user-images.githubusercontent.com/21187281/31676164-6168fbda-b32c-11e7-8291-073c6ef29d79.png">

### Delete a Training Program (#11)
Comment

<img width="1438" alt="edittrainingss" src="https://user-images.githubusercontent.com/21187281/31676164-6168fbda-b32c-11e7-8291-073c6ef29d79.png">


## Credits
### Project Manager
- [Jufe Brown-Tsai](https://github.com/Jufebrown)

### CLI Developers
- [Megan Brown](https://github.com/megbrown)
- [Arwa Kuterwadliwala](https://github.com/Arwask)
- [Jon Roberts](https://github.com/thejonroberts)
- [Sam Baker](https://github.com/SamBDev)
- [Josh Lloyd](https://github.com/joshualloyd)
- [Alana Smith](https://github.com/missalana00)

## Contribute to CLI
- Fork - issue tickets and pull requests are welcome
- Follow the template for PR requests
- Tab size 2

<p align="center">&copy; 2017 Delicate-Butterflys</p>













































### Contributing

#### Sequelize config.json:
You may need to add your psql username and password the the development database in the /config/config.json file.  For this reason, it has been .gitignored.  There is, however, a config.json.example. Copy all from the .example file, paste into a new config.json file in the /config folder, and try as is before adding your user/password to the development config info.

#### Note on Model/Migration creation:
We are using snake_case for our database attribute names.  By default, sequelize uses camelCase, which comes into play for the auto-generated updatedAt and createdAt attributes.  To avoid this, please use the --underscored argument when creating the model via sequelize cli. Example:
```sequelize model:create --name [model] --underscored --attributes [attributes].```
