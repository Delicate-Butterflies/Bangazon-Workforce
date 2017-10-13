'use strict';
// To add updated_at attribute to the computers table which was not on boiler plate
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('employees', 'start_date', Sequelize.DATEONLY);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('employees', 'start_date');
  }
};
