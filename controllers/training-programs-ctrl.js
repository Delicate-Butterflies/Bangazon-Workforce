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
  // const programObj = {
  //   createdAt: new Date().toISOString(),
  //   end_date: '2018-02-26T06:18:18.445Z',
  //   max_attendance: '9',
  //   start_date: '2018-02-12T06:18:18.445Z',
  //   title: 'get out there',
  //   updatedAt: new Date().toISOString(),
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Sed cursus ante dapibus diam.Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Fusce nec tellus sed augue semper porta.'
  // };
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
