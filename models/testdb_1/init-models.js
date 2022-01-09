var DataTypes = require("sequelize").DataTypes;
var _Product = require("./Product");
var _User = require("./User");

function initModels(sequelize) {
  var Product = _Product(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);


  return {
    Product,
    User,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
