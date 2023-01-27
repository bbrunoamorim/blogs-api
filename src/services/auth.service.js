const jwt = require('../utils/jwt');

const User = require('../models/User');

const userLogin = async (email, password) => {
  const user = await User.findOne({
    where: { email, password },
  });

  if (!user) {
    return { type: 'BAD_REQUEST', message: 'Invalid fields' };
  }

  const token = jwt.generateToken(email);
  return { type: null, message: token };
};

module.exports = {
  userLogin,
};