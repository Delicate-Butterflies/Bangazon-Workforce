'use strict';

let computers = require('../data/computers');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('computers', computers, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('computers', null, {});
  }
};
