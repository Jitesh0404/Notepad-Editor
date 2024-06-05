const jwt = require("jsonwebtoken");
const errorHandler = require("./errorHandler");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    // Correctly passing the error to the next middleware
    return next(errorHandler(401, "Unauthorized"));
  }

  jwt.verify(token, 'DummyJWTSecretKey', (err, user) => {
    if (err) {
      // Ensure the error is correctly passed to the next middleware
      return next(new Error(err.message));
    }
    req.user = user;
    next();
  });
};

module.exports = {
  verifyToken
};
