'use strict';

const npm = require('npm');
const { assert } = require('chai');
const db = require("../models/index.js");

describe('Get a list of departments', () => {
  //https://nick-tomlin.com/2015/09/04/programmatically-running-npm-scripts/
  before(function () {
    npm.load({}, function (er) {
      if (er) { return; }
      return npm.commands.run(['rebuild']);
    });
  });

  describe('department.findAll', () => {
    it('should return an array', () => {
      return db.department.findAll()
        .then((departments) => {
          assert.isArray(departments);
        });
    });
    it('objects should have certain keys', () => {
      return db.department.findAll()
        .then((departments) => {
          assert.property(departments[0], 'name');
          assert.property(departments[0], 'expense_budget');
          assert.property(departments[0], 'supervisor_employee_id');
        });
    });
  });
});