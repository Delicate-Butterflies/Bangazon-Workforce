'use strict';

/** @module Employee List Controller */

module.exports.getDepartments = (req, res, next) => {
  const { department } = req.app.get('models');
  department
    .findAll()
    .then(departments => {
      res.render('departments-list', { departments });
    })
    .catch(err => {
      next(err); //Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
    });
};

module.exports.getDepartmentById = (req, res, next) => {
  // const { employee, department } = req.app.get('models');
  const deptEmployees = [
    {
      first_name: 'Ali',
      last_name: 'Smith'
    },
    {
      first_name: 'Carrie',
      last_name: 'Dayton'
    }
  ];
  res.render('department-detail', { deptEmployees });
};

module.exports.getEmployeeById = (req, res, next) => {
  const { employee, department } = req.app.get('models');
  employee
    .findById(req.params.id, {
      include: [{ model: department }]
    })
    .then(employee => {
      res.render('employee-edit', { employee });
    })
    .catch(err => {
      next(err);
    });
};
