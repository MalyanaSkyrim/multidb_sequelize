module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstname: { type: DataTypes.STRING, allowNull: false },
      lastname: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: true }
    },
    {
      freezeTableName: true
    }
  );
  User.associate = function (models) {
    User.hasMany(models.testdb_1.Product, {
      as:'products',
      foreignKey: {
        allowNull: true,
        name: "userId",
      },
    });
    User.addScope("defaultScope", {
      include: [
        { model: models.testdb_1.Product, as: "products" },
      ],
    });
  };
  return User;
};
