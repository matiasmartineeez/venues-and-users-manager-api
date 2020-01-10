const jsonwebtoken = require("./node_modules/jsonwebtoken");
const errorHandler = require("./errorhandler");
require("./node_modules/dotenv").config();

const sign = payload => {
  return jsonwebtoken.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME
  });
};

const check = (req, res, next) => {
  let token = req.headers["authorization"];

  if (token && token.startsWith("Bearer ")) {
    // Remove Bearer
    token = token.slice(7, token.length);
    
    // Verify JWT Token
    jsonwebtoken.verify(token, process.env.JWT_SECRET, (error, decode) => {
      if (error) {
        req.jwt = null;
        return errorHandler.unauthorized(res, "Auth token is not valid");
      } else {
        req.body.jwt = decode;
        next();
      }
    });
  } else {
    return errorHandler.unauthorized(res, "Auth token is not supplied");
  }
};

module.exports = { sign, check };