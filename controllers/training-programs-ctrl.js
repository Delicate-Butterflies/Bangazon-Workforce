'use strict';

/** @module TrainingPrograms List Controller */

module.exports.getTrainingPrograms = (req, res, next) => {
  const { training_programs } = req.app.get('models');
  training_programs
    .findAll()
    .then(programs => {
      res.render('programs-list', { programs });
    })
    .catch(err => {
      next(err); //Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
    });
};
