const { User } = require("../../models").testdb_2;

const createUser = async (userData) => {
  return await User.create(userData);
};

const getUsersList = async (query = {}) => {
  return await User.findAll({ raw: true, ...query });
};

module.exports = {
  createUser,
  getUsersList,
};
