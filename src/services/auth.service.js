const jwt = require('../utils/jwt');

const { User } = require('../models');

const userLogin = async (email, password) => {
  const user = await User.findOne({
    where: { email },
  });

  if (!user) {
    return { type: 'BAD_REQUEST', message: 'Invalid fields' };
  }

  const payload = { email, password };
  console.log(payload);
  const token = jwt.generateToken(payload);
  return token;
};

module.exports = {
  userLogin,
};
