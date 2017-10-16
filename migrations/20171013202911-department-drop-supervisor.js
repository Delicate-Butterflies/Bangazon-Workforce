'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.removeColumn('departments', 'supervisor_employeeId').then(function () {
      return queryInterface.addColumn('employees', 'isSupervisor', Sequelize.BOOLEAN);
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.removeColumn('employees', 'isSupervisor').then(function () {
      return queryInterface.addColumn('departments', 'supervisor_employeeId', Sequelize.INTEGER);
    });
  }
};
