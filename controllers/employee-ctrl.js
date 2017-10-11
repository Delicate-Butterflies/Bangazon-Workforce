'use strict';

/** @module Employee List Controller */

module.exports.getEmployees = (req, res, next) => {
  let employees = [
    {
      first_name: 'Megan',
      last_name: 'Brown',
      department: 'Finance'
    },
    {
      first_name: 'Josh',
      last_name: 'Lloyd',
      department: 'Janitorial'
    },
    {
      first_name: 'Arwa',
      last_name: 'Kuterwadliwala',
      department: 'Executive'
    }
  ];
  res.render('employees-list', { employees });
};
