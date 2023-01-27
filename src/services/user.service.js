const { User } = require('../models');
const jwt = require('../utils/jwt');

const createUser = async ({ displayName, email, password, image }) => {
  await User.create({ displayName, email, password, image });
  return jwt.generateToken({ email });
};

module.exports = {
  createUser,
};
