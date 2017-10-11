'use strict';
// To add created_at attribute to the computers table which was not on boiler plate

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('computers', 'decommission_date', Sequelize.DATE).then(function() {
      return queryInterface.addColumn('computers', 'serial_number', Sequelize.STRING);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('computers', 'decommission_date').then(function() {
      return queryInterface.removeColumn('computers', 'serial_number');
    });
  }
};
