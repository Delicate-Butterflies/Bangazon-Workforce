'use strict';

let departments = require('../data/departments');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('departments', departments, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('departments', null, {});
  }
};
