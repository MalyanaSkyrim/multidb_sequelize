module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
      "Product",
      {
        name: { type: DataTypes.STRING, allowNull: true },
        price: { type: DataTypes.DOUBLE, allowNull: true },
      },
      {
        freezeTableName: true
      }
    );
    Product.associate = function (models) {
      Product.belongsTo(models.testdb_1.User, {
        foreignKey: {
          allowNull: true,
          name: "userId",
        },
      });
    }
    return Product;
  };