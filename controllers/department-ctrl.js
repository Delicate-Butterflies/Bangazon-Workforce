'use strict';

/** @module Department Controller */

/**
 * Get all departments and render 'departments-list'
 */
module.exports.getDepartments = (req, res, next) => {
  const { department, employee } = req.app.get('models');
  department
    .findAll({
      include: [
        {
          model: employee,
          where: { isSupervisor: true }
        }
      ]
    })
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
  department
    .findById(req.params.id)
    .then(department => {
      data.department = department;
      return employee.findAll({ where: { departmentId: req.params.id } });
    })
    .then(deptEmployees => {
      data.deptEmployees = deptEmployees;
      res.render('department-detail', data);
    })
    .catch(err => {
      next(err);
    });
};

/**
 * Renders a form that allows user to create department, set budget, and select a supervisor
 */
module.exports.addDepartmentForm = (req, res, next) => {
  const { employee } = req.app.get('models');
  employee
    .findAll({ where: { isSupervisor: false } })
    .then(employees => {
      employees.unshift({ placeholder: '-- SELECT AN EMPLOYEE TO SUPERVISE THE DEPARTMENT --', id: '' });
      res.render('department-add', { employees });
    })
    .catch(err => {
      next(err);
    });
};

/**
 * Handles form submissions to create departments
 */
module.exports.createDepartment = (req, res, next) => {
  const { department, employee } = req.app.get('models');
  let deptId = null;
  department
    .create(req.body)
    .then(data => {
      deptId = data.id;
      return employee.findOne({ where: { id: req.body.supervisor_employee_id } });
    })
    .then(employee => {
      return employee.update({ isSupervisor: true, departmentId: deptId });
    })
    .then(updatedEmployee => {
      res.redirect('/departments');
    })
    .catch(err => {
      console.log('error', err);
    });
};
