const { User } = require('../models');

const userLogin = async (email, password) => {
  const user = await User.findOne({
    where: { email, password },
  });

  if (!user) return { type: 'BAD_REQUEST', message: 'Invalid fields' };

  return { type: null, message: '' };
};

module.exports = {
  userLogin,
};
