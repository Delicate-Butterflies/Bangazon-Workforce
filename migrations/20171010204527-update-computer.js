'use strict';
// To add created_at attribute to the computers table which was not on boiler plate

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('computers', 'created_at', Sequelize.STRING);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('computers', 'created_at');
  }
};
