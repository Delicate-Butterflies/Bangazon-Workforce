'use strict';

let trainingPrograms = require('../data/training-programs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('training_programs', trainingPrograms, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('training_programs', null, {});
  }
};
