'use strict';

/** @module Employee List Controller */

module.exports.getEmployees = (req, res, next) => {
  const { employee, department } = req.app.get('models');
  employee
    .findAll({ include: [{ model: department }] })
    .then(employees => {
      res.render('employees-list', { employees });
    })
    .catch(err => {
      next(err); //Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
    });
};
