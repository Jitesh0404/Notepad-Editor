const jwt = require("jsonwebtoken");
const errorHandler = require("./errorHandler");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log("Token is : ", token);

  if (!token) {
    // Correctly passing the error to the next middleware
    return next(errorHandler(401, "Unauthorized"));
  }

  console.log("After token ====");

  jwt.verify(token, 'DummyJWTSecretKey', (err, user) => {
    if (err) {
      // Ensure the error is correctly passed to the next middleware
      return next(new Error(err.message));
    }
    req.user = user;
    console.log("req data is : ", user);
    next();
  });
};

module.exports = {
  verifyToken
};
