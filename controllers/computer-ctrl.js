'use strict';

/** @module employee-Ctrl */

/**
 * Get all computers and render 'computers-list'
 */
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

/**
 * Get a single computer and employees associated with computer
 */
module.exports.getComputerById = (req, res, next) => {
  const { computer, employee } = req.app.get('models');
  computer
    .findAll({
      include: [{ model: employee }],
      where: { id: req.params.id }
    })
    .then(computer => {
      res.status(200).json(computer);
      // res.render('computer-details', { computer });
    })
    .catch(err => {
      next(err);
    });
};

/**
 * Show form that allows user to add a computer
 */
module.exports.showComputerForm = (req, res, next) => {
  res.render('computer-add');
};

/**
 * Post new computer then redirect user to all computers view
 */
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

/**
 * Delete computer then redirect user to all computers view
 */
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
