const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '10m',
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  try {
    return jwt.sign(payload, TOKEN_SECRET, jwtConfig);
  } catch (err) {
    return err;
  }
};

const decodeToken = (token) => {
  if (!token) return { type: 'UNAUTHORIZED', message: 'Token not found' };

  try {
    const result = jwt.verify(token, TOKEN_SECRET);
    if (!result) return { type: 'UNAUTHORIZED', message: 'Expired or invalid token' };
    return { type: null, message: result };
  } catch (err) {
    return err;
  }
};

module.exports = {
  generateToken,
  decodeToken,
};
