const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET || 'megasenha';

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '10m',
};

const generateToken = (payload) => {
  try {
    return jwt.sign(payload, TOKEN_SECRET, jwtConfig);
  } catch (err) {
    console.log(err.message);
  }
};

const decodeToken = (token) => {
  if (!token) {
    throw new Error('Undefined Token');
  }

  try {
    const result = jwt.verify(token, TOKEN_SECRET);
    return result;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  generateToken,
  decodeToken,
};
