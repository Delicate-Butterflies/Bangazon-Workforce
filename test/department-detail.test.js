const npm = require('npm');
const { assert } = require('chai');
const db = require("../models/index.js");

describe('Get a department\'s list of employees', () => {
  //https://nick-tomlin.com/2015/09/04/programmatically-running-npm-scripts/
  before(function () {
    npm.load({}, function (er) {
      if (er) { return; }
      return npm.commands.run(['rebuild']);
    });
  });
  describe('department.findById()', () => {
    it('should return an object', () => {
      return db.department.findById(1)
        .then((departmentData) => {
          assert.isObject(departmentData);
        });
    });
    it('should have a name property equal to Marketing when passed 1', () => {
      return db.department.findById(1)
        .then((departmentData) => {
          // console.log('department data', departmentData);
          assert.equal(departmentData.dataValues.name, 'Marketing');
        });
    });
  });
});