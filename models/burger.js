var orm = require('../config/orm.js');

var burger = {
	
    all: function(cbFunction) {
        orm.selectAll("burgers", function(res) {
            cbFunction(res);
        });
    },

    create: function(vals, cbFunction) {
        orm.insertOne("burgers", vals, function(res) {
            cbFunction(res);
        });
    },

    update: function(objColVals, condition, cbFunction) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cbFunction(res);
        });
    },

    delete: function(condition, cbFunction) {
        orm.delete("burgers", condition, function(res) {
            cbFunction(res);
        });
    }
};

module.exports = burger;
