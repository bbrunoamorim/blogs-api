const { userService } = require('../services');
const { mapError } = require('../utils/errorMap');
const jwt = require('../utils/jwt');

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  const { type, message } = await userService.userLogin(email, password);
  if (type) return res.status(mapError(type)).json({ message });

  const payload = { email, password };
  const token = jwt.generateToken(payload);
  return res.status(200).json({ token });
};

module.exports = {
  userLogin,
};
