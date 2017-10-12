'use strict';
// To add updated_at attribute to the computers table which was not on boiler plate
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('training_programs', 'description', Sequelize.STRING);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('training_programs', 'description');
  }
};
