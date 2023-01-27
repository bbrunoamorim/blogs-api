const jwt = require('../utils/jwt');

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const user = jwt.decodeToken(authorization);

  if (!user) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  return next();
};

module.exports = authMiddleware;
