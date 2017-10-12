'use strict';

let employeesComputers = require('../data/employees-computers');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('employees_computers', employeesComputers, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('employees_computers', null, {});
  }
};
