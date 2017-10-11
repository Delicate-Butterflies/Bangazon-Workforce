'use strict';

module.exports = function(sequelize, DataTypes) {
  var Computer = sequelize.define(
    'Computer',
    {
      manufacturer: DataTypes.STRING,
      make: DataTypes.STRING,
      purchase_date: DataTypes.DATEONLY,
      created_at: DataTypes.STRING,
      updated_at: DataTypes.STRING
    },
    /**
     * 'Underscored: true' is property added by sequelize when we add a flag --underscored at the time of creation of a model. This property changes the case of default properties(createAt and updateAt) from camel case to snake case(underscore) to match the rest of the property names on the table
     */
    {
      underscored: true
    }
  );

  Computer.associate = models => {};

  return Computer;
};
