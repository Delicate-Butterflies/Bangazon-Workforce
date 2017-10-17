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
 * determine if there is a null value present for the return_date of any computer/employee relationship indicating a computer is actively used
 */
function computerStatus(computer) {
  let empCompArr = computer.employees;
  let returnDateArray = [];
  empCompArr.forEach(function(obj) {
    returnDateArray.push(obj.employees_computers.return_date);
  });
  let currentlyAssignedStatus = returnDateArray.includes(null);
  return currentlyAssignedStatus;
}

/**
 * Get a single computer and employees associated with computer
 */
module.exports.getComputerById = (req, res, next) => {
  const { computer, employee, employee_computer } = req.app.get('models');
  computer
    .findAll({
      include: [{ model: employee }],
      where: { id: req.params.id }
    })
    .then(results => {
      let computer = results[0].dataValues;
      computer.currentlyAssignedStatus = computerStatus(computer);
      // res.status(200).json(computer);
      res.render('computer-details', { computer });
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
 * Determine which method to call, put or delete, based on the request body (method override)
 */
module.exports.removeComputer = (req, res, next) => {
  if (req.body._method === 'DELETE') {
    deleteComputer(req, res, next);
  } else {
    decomissionComputer(req, res, next);
  }
};

/**
 * Delete new computer then redirect user to all computers view
 */
function deleteComputer(req, res, next) {
  const { computer } = req.app.get('models');
  computer
    .destroy({ where: { id: req.params.id } })
    .then(computer => {
      res.redirect('/computers');
    })
    .catch(err => {
      next(err);
    });
}

/**
 * Update computer with decommission date then redirect user to all computers view
 */
function decomissionComputer(req, res, next) {
  const { computer } = req.app.get('models');
  let today = new Date();
  today.toISOString().substr(0, 10);
  computer
    .update({ decommission_date: today }, { where: { id: req.params.id } })
    .then(computer => {
      res.redirect('/computers');
    })
    .catch(err => {
      next(err);
    });
}
