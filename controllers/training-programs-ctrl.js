'use strict';

/** @module TrainingPrograms List Controller */

module.exports.getTrainingPrograms = (req, res, next) => {
  const { training_program } = req.app.get('models');
  let currentDate = new Date().toISOString();
  training_program
    .findAll({
      where: {
        start_date: {
          $gt: currentDate
        }
      }
    })
    .then(programs => {
      res.render('programs-list', { programs });
    })
    .catch(err => {
      next(err); //Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
    });
};

module.exports.postTrainingProgram = (req, res, next) => {
  const { training_program } = req.app.get('models');
  const programObj = req.body;

  training_program
    .create(programObj)
    .then(addedProgram => {
      res.status(200).json(addedProgram);
    })
    .catch(err => {
      next(err);
    });
  // console.log('Added');
};

module.exports.getForm = (req, res, next) => {
  res.render('program-add');
};
