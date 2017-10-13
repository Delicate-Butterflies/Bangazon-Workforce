'use strict';

module.exports.getComputers = (req, res, next) => {
  const { computer } = req.app.get('models');
  computer
    .findAll()
    .then(computers => {
      res.render('computers-list', { computers });
    })
    .catch(err => {
      next(err);
    });
};

module.exports.getComputerById = (req, res, next) => {
  const { computer, employee } = req.app.get('models');
  computer
    .findOne({ where: { id: req.params.id }, include: [{ model: employee }] })
    .then(computer => {
      // res.status(200).json(computer);
      // // console.log()
      // // console.log(computer);
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
  const { computer } = req.app.get('models');
  const computerObj = req.body;
  computer
    .create(computerObj)
    .then(computer => {
      res.redirect('/computers');
    })
    .catch(err => {
      next(err);
    });
};

module.exports.deleteComputer = (req, res, next) => {
  console.log('reached computer module');
  const { computer } = req.app.get('models');
  console.log(req.params.id);
  computer
    .destroy({ where: { id: req.params.id } })
    .then(computer => {
      res.redirect('/computers');
    })
    .catch(err => {
      next(err);
    });
};

function employeeComputerCheck(computerId) {}
