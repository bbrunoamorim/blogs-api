const { User } = require('../models');
const jwt = require('../utils/jwt');

const createUser = async ({ displayName, email, password, image }) => {
  await User.create({ displayName, email, password, image });
  return jwt.generateToken({ email });
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  return users;
};

module.exports = {
  createUser,
  getAll,
};
