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

const getById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  return user;
};

const getByEmail = async (email) => {
  const user = await User.findOne({
    where: { email },
  });
  return user;
};

module.exports = {
  createUser,
  getAll,
  getById,
  getByEmail,
};
