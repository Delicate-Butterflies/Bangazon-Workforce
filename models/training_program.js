'use strict';
module.exports = (sequelize, DataTypes) => {
  var training_program = sequelize.define('training_program', {
    start_date: DataTypes.STRING,
    end_date: DataTypes.STRING,
    max_attendance: DataTypes.INTEGER,
    title: DataTypes.STRING
  });
  training_program.associate = function(models) {
    training_program.belongsToMany(models.employee, {
      as: 'signedupPrograms',
      through: 'employee_training',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };
  return training_program;
};
