'use strict';

// To add decommission_date, serial_number attributes to the computers table which was not on boiler plate
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('computers', 'decommission_date', Sequelize.DATEONLY).then(function() {
      return queryInterface.addColumn('computers', 'serial_number', Sequelize.STRING);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('computers', 'decommission_date').then(function() {
      return queryInterface.removeColumn('computers', 'serial_number');
    });
  }
};
