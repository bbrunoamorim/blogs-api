const authService = require('../services/auth.service');
const { mapError } = require('../utils/errorMap');

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  const { type, message } = await authService.userLogin(email, password);
  if (type) return res.status(mapError(type)).json({ message });

  return res.status(200).json({ message });
};

module.exports = {
  userLogin,
};
