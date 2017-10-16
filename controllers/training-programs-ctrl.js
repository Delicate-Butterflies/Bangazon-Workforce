'use strict';

/** @module TrainingPrograms List Controller */

/**
 * getTrainingProgram function gets all the training programs that are going to happen in future.
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

/**
 * postTrainingProgram function saves a training program using a form.
 */
module.exports.postTrainingProgram = (req, res, next) => {
  const { training_program } = req.app.get('models');
  const programObj = req.body;

  training_program
    .create(programObj)
    .then(() => {
      res.redirect('/training'); // redirects to view training page -- can redirect to single training program view once that function is done
    })
    .catch(err => {
      next(err);
    });
};

/**
 * getForm function gets the form that will take input to add training programs.
 */
module.exports.getForm = (req, res, next) => {
  if (req.params.id) {
    const { training_program } = req.app.get('models');
    training_program
      .findById(req.params.id, {
        // include: [{ model: department }]
      })
      .then(program => {
        program = program.dataValues;
        console.log(program);
        res.render('program-edit', { program });
      })
      .catch(err => {
        next(err);
      });
  } else res.render('program-add');
};

/**
 * Get training program name, get employees by specifice department, and render 'program-detail'
 */
module.exports.getProgramById = (req, res, next) => {
  const { training_program, employee } = req.app.get('models');
  let data = {};
  training_program
    .findAll({ include: [{ model: employee }], where: { id: req.params.id } })
    .then(programEmployees => {
      data.program = programEmployees[0].dataValues;
      data.trainees = data.program.employees.map(trainee => {
        return Object.assign({}, trainee.dataValues);
      });
      res.render('program-detail', data);
    })
    .catch(err => {
      next(err);
    });
};

/**
 * Delete training programs and associated employee training data'
 */
module.exports.deleteProgram = (req, res, next) => {
  const { training_program, employee } = req.app.get('models');
  training_program
    .destroy({ include: [{ model: employee }], where: { id: req.params.id } })
    .then(() => {
      res.redirect('/training');
    })
    .catch(err => {
      next(err);
    });
};

/**
 * Update training programs
 */
module.exports.updateProgram = (req, res, next) => {};
