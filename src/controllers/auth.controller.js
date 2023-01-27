const authService = require('../services/auth.service');

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await authService.userLogin(email, password);
  if (!user) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  return res.status(200).json({ user });
};

module.exports = {
  userLogin,
};
