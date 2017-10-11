'use strict';
// To add updated_at attribute to the computers table which was not on boiler plate
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('computers', 'updated_at', Sequelize.STRING);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('computers', 'updated_at');
  }
};
