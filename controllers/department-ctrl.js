'use strict';

/** @module Department List Controller */

/**
 * Get all departments and render 'departments-list'
 */
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

/**
 * Get department name, get employees by specifice department and render 'department-detail'
 */
module.exports.getDepartmentById = (req, res, next) => {
  const { employee, department } = req.app.get('models');
  let data = {};
  department.findById(req.params.id)
    .then(department => {
      data.department = department;
      return employee.findAll({ where: { department_id: req.params.id } })
    })
    .then(deptEmployees => {
      data.deptEmployees = deptEmployees;
      res.render('department-detail', data);
    })
    .catch(err => {
      next(err);
    });
};