'use strict';

let employeesTrainings = require('../data/employees-trainings');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('employees_trainings', employeesTrainings, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('employees_trainings', null, {});
  }
};
