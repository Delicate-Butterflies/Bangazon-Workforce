'use strict';

module.exports.getComputers = (req, res, next) => {
  const { computer } = req.app.get('models');
  computer
    .findAll()
    .then(computers => {
      console.log(computers);
      res.render('computers-list', { computers });
    })
    .catch(err => {
      next(err); //Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
    });
};

module.exports.getComputerById = (req, res, next) => {
  const { computer } = req.app.get('models');
  computer
    .findById(req.params.id)
    .then(computer => {
      res.render('computer-details', { computer });
    })
    .catch(err => {
      next(err);
    });
};

module.exports.showComputerForm = (req, res, next) => {
  res.render('computer-add');
};

module.exports.addComputer = (req, res, next) => {
  console.log('in progress');
};
