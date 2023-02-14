const jwt = require('../utils/jwt');

const { User } = require('../models');

const userLogin = async (email, _password) => {
  const user = await User.findOne({
    where: { email },
  });

  if (!user) {
    return null;
  }

  const token = jwt.generateToken({ email, userId: user.id });
  return token;
};

module.exports = {
  userLogin,
};
