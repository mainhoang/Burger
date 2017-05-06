var connection = require('../config/connection.js');

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }

    return arr.toString();
}

var orm = {
    
    selectAll: function(tableName, cbFunction) {
        var queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString, function(err, resultsArr) {
            if (err) {
                throw err;
            }
            cbFunction(resultsArr);
        });
    },

    insertOne: function(tableName, obj, cbFunction) {
        var query = "INSERT INTO " + tableName + " SET ?";

        console.log(query);

        connection.query(query, {
                name: obj.name,
                devoured: false,
            },

            function(err, resultsArr) {
                if (err) {
                    throw err;
                }
                cbFunction(resultsArr);
            });
    },

    updateOne: function(tableName, objColVals, condition, cbFunction) {
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
