const { check, validationResult } = require("./node_modules/express-validator");

/* Validations */
// Venues
exports.venue = check("venue").custom(value => !isNaN(value));

// Clients
exports.client = check("client").isLength({ min: 6 });

exports.validation = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  next();
};
