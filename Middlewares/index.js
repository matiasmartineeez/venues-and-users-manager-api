const errorHandler = require("../helpers/errorhandler");
const jwt = require("../helpers/jwt");

const log = (req, res, next) => {
  console.log("====================================");
  console.log("NEW REQUEST");
  console.log("URL", req.url);
  console.log("HEADERS", req.headers);
  console.log("QUERY", req.query);
  console.log("BODY", req.body);
  console.log("PARAMS", req.params);
  console.log("====================================");

  next();
};

const auth = (req, res, next) => {
  // Validating API_KEY
  if (process.env.API_KEY === req.headers.api_key) {
    next();
  } else {
    return errorHandler.unauthorized(res, "Invalid API KEY");
  }
};

const jwtCheck = (req, res, next) => jwt.check(req, res, next);

module.exports = { log, auth, jwtCheck };
