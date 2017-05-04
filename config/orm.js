var connection = require('../config/connection.js');

var orm = {
  all: function(tableName, cbFunction) {
    var queryString = "SELECT * FROM " + tableName + ";";
    connection.query(queryString, function(err, resultsArr) {
      if (err) {
        throw err;
      }
      cbFunction(resultsArr);
    });
  },
  create: function(tableName, cols, vals, cbFunction) {
    var query = "INSERT INTO " + tableName + " (" + cols.toString(); + ") ";
    	query += "VALUES (" + printQuestionMarks(vals.length); + ") ";

    console.log(query);

    connection.query(query, vals, function(err, resultsArr) {
      if (err) {
        throw err;
      }
      cbFunction(resultsArr);
    });
  },

  update: function(tableName, objColVals, condition, cbFunction) {
    var query = "UPDATE " + tableName + " SET " + objToSql(objColVals);
    	query += " WHERE " + condition;

    console.log(query);
    connection.query(query, function(err, resultsArr) {
      if (err) {
        throw err;
      }
      cbFunction(resultsArr);
    });
  },
  delete: function(tableName, condition, cbFunction) {
    var query = "DELETE FROM " + tableName + " WHERE " + condition;

    connection.query(query, function(err, resultsArr) {
      if (err) {
        throw err;
      }
      cbFunction(resultsArr);
    });
  }
};

module.exports = orm;