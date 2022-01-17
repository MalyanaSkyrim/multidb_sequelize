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
  return User;
};
