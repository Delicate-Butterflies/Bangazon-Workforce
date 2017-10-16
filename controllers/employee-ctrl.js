'use strict';

/** @module Employee List Controller */

/**
 * Gets all employees from the database and renders them.
 */
module.exports.getEmployees = (req, res, next) => {
  const { employee, department } = req.app.get('models');
  employee
    .findAll({ include: [{ model: department }] })
    .then(employees => {
      res.render('employees-list', { employees });
    })
    .catch(err => {
      next(err);
    });
};

/**
 * Gets employee details and send them to template for rendering.
 */
module.exports.showEmployeeDetails = (req, res, next) => {
  const { employee } = req.app.get('models');
  employee
    .findAll({
      include: [{ all: true }],
      where: { id: req.params.id }
    })
    .then(results => {
      let employee = results[0].dataValues;
      let department = employee.department;
      let computers = employee.computers;
      let programs = employee.training_programs;
      res.render('employee-view', {
        employee,
        department,
        computers,
        programs
      });
    })
    .catch(err => {
      next(err);
    });
};

/**
 * Gets an employee by their Id and displays them for editing
 */
module.exports.editEmployeeDetails = (req, res, next) => {
  const { employee, department, computer, training_program } = req.app.get('models');
  const data = {};
  employee
    .findAll({
      include: [{ all: true }],
      where: { id: req.params.id }
    })
    .then(employee => {
      data.employee = employee[0].dataValues;
      department.findAll().then(departments => {
        data.departments = departments;
        computer.findAll().then(computers => {
          data.computers = computers;
          training_program.findAll().then(programs => {
            data.programs = programs;
            // console.log(res.json(data));
            res.render('employee-edit', { data });
          });
        });
      });
    })
    .catch(err => {
      next(err);
    });
};

/**
 * Displays form for creating a new employee
 */
module.exports.showEmployeeForm = (req, res, next) => {
  const { department } = req.app.get('models');
  department.findAll().then(departments => {
    res.render('employee-add', { departments });
  });
};

/**
 * Adds an employee to the database then redirects to the list of employees
 */
module.exports.addEmployee = (req, res, next) => {
  const { employee } = req.app.get('models');
  employee.create(req.body).then(() => {
    res.redirect('/employees');
  });
};

module.exports.saveEmployeeDetails = (req, res, next) => {
  console.log(res.json(req.body));
};
