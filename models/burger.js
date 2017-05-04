var orm = require('../config/orm.js');

var burger = {
  all: function(cbFunction) {
    orm.selectAll("burgers", function(res) {
      cbFunction(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cbFunction) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cbFunction(res);
    });
  },
  update: function(objColVals, condition, cbFunction) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cbFunction(res);
    });
  }
  // ,
  // delete: function(condition, cbFunction) {
  //   orm.delete("cats", condition, function(res) {
  //     cbFunction(res);
  //   });
  // }
};

module.exports = burger;