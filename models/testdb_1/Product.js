const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Product', {
    name: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Product',
    schema: 'public',
    timestamps: false
  });
};
