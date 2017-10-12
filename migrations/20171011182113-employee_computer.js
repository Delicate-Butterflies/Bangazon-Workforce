'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('employees_computers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      employee_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          // Again, note the plural!!!!!
          model: 'employees',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      computer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'computers',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      assign_date: {
        type: Sequelize.DATE
      },
      return_date: {
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('employees_computers');
  }
};
