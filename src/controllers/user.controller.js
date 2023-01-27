const userService = require('../services/user.service');
const authService = require('../services/auth.service');

const createUser = async (req, res) => {
  const availableEmail = await authService.userLogin(req.body.email, req.body.password);
  if (availableEmail !== null) {
    return res.status(409).json({ message: 'User already registered' });
  }
  const user = await userService.createUser(req.body);
  return res.status(201).json({ token: user });
};

const getAll = async (_req, res) => {
  const users = await userService.getAll();
  return res.status(200).json(users);
};

module.exports = {
  createUser,
  getAll,
};
