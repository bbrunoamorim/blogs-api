const jwt = require('../utils/jwt');

const { User } = require('../models');

const userLogin = async (email, _password) => {
  const user = await User.findOne({
    where: { email },
  });

  if (!user) {
    return null;
  }

  const payload = { email };
  console.log(payload);
  const token = jwt.generateToken(payload);
  return token;
};

module.exports = {
  userLogin,
};
