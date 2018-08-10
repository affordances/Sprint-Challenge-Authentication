const jwt = require('jsonwebtoken');

const jwtKey = require('../_secrets/keys').jwtKey;

// quickly see what this file exports
module.exports = {
  authenticate,
  generateToken
};

function generateToken(user) {
  const payload = { username: user.username };
  const options = { expiresIn: '1h' };
  return jwt.sign(payload, jwtKey, options);
}

// implementation details
function authenticate(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) return res.status(422).json(err);

      req.decoded = decoded;

      next();
    });
  } else {
    return res.status(401).json({
      error: 'No token provided, must be set on the Authorization Header',
    });
  }
}