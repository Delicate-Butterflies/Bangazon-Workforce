'use strict';

/** @module TrainingPrograms List Controller */

/**
 * getTrainingProgram function gets all teh training programs that are going to happen in future.
 */
module.exports.getTrainingPrograms = (req, res, next) => {
  const { training_program } = req.app.get('models');
  let currentDate = new Date();
  training_program
    .findAll({
      //findAll finda all the training programs
      where: {
        start_date: {
          $gt: currentDate //$gt stands for greater than operation. It checks if start date is greater than current date.
        }
      }
    })
    .then(programs => {
      res.render('programs-list', { programs }); //renders programs-list using the template
    })
    .catch(err => {
      next(err);
    });
};

module.exports.postTrainingProgram = (req, res, next) => {
  const { training_program } = req.app.get('models');
  const programObj = req.body;

  training_program
    .create(programObj)
    .then(addedProgram => {
      res.redirect('/training');
    })
    .catch(err => {
      next(err);
    });
  // console.log('Added');
};

module.exports.getForm = (req, res, next) => {
  res.render('program-add');
};
