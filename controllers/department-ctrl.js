'use strict';

/** @module Employee List Controller */

module.exports.getDepartments = (req, res, next) => {
  const { department } = req.app.get('models');
  department
    .findAll()
    .then(departments => {
      console.log('departments', departments);
      res.render('departments-list', { departments });
    })
    .catch(err => {
      next(err); //Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
    });
};