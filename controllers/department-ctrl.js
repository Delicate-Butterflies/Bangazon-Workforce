'use strict';

/** @module Employee List Controller */

module.exports.getDepartments = (req, res, next) => {
  let departments = [
    {
      name: 'Finance'
    },
    {
      name: 'Janitorial'
    },
    {
      name: 'Executive'
    }
  ];
  res.render('departments-list', { departments });
};
