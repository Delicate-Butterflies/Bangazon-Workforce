'use strict';

// To add manufacturer, model attributes to the computers table which was not on boiler plate
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('computers', 'manufacturer', Sequelize.STRING).then(function() {
      return queryInterface.addColumn('computers', 'model', Sequelize.STRING);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('computers', 'manufacturer').then(function() {
      return queryInterface.removeColumn('computers', 'model');
    });
  }
};
