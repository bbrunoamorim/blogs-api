const { User } = require('../models');
const jwt = require('../utils/jwt');

const createUser = async ({ displayName, email, password, image }) => {
  await User.create({ displayName, email, password, image });
  return jwt.generateToken({ email });
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const getById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });
  return user;
};

const getByEmail = async (email) => {
  const user = await User.findOne({
    where: { email },
  });
  return user;
};

const deleteUser = async (id) => {
  await User.destroy({
    where: { id },
  });
};

module.exports = {
  createUser,
  getAll,
  getById,
  getByEmail,
  deleteUser,
};
