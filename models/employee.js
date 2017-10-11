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
      zip_code: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    }
    /**
     * 'Underscored: true' is property added by sequelize when we add a flag --underscored at the time of creation of a model. This property changes the case of default properties(createAt and updateAt) from camel case to snake case(underscore) to match the rest of the property names on the table
     */
    // {
    //   underscored: true
    // }
  );
  /**
   *  employee and departments table have one to many relationship. An employee can be in a single department but a department can have multiple employees. belongsTo associates one to many relationship here.
   */
  employee.associate = function(models) {
    employee.belongsTo(models.department, {
      foreignKey: 'department_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCASE'
    });
  };
  return employee;
};
