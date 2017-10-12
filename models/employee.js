'use strict';
module.exports = (sequelize, DataTypes) => {
  var employee = sequelize.define('employee', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    department_id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    job_title: DataTypes.STRING,
    street_address: DataTypes.STRING,
    city_address: DataTypes.STRING,
    state_code: DataTypes.STRING,
    zip_code: DataTypes.INTEGER
  });
  /**
   *  employee and departments table have one to many relationship. An employee can be in a single department but a department can have multiple employees. belongsTo associates one to many relationship here.
   */
  employee.associate = function(models) {
    employee.belongsTo(models.department, {
      foreignKey: 'department_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCASE'
    });

    employee.belongsToMany(models.computer, {
      through: 'employees_computers'
    });

    employee.belongsToMany(models.training_program, {
      through: 'employees_trainings'
    });
  };
  return employee;
};
