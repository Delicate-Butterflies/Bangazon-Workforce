'use strict';
module.exports = (sequelize, DataTypes) => {
  var employee = sequelize.define(
    'employee',
    {
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
    },
    {
      underscored: true
    }
  );
  employee.associate = function(models) {
    employee.belongsTo(models.department);
  };
  return employee;
};
