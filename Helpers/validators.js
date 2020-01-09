const { check, validationResult } = require("express-validator");

/* Validations */
// Venues
exports.venue = check("venue").isLength({ min: 6 });

// Clients
exports.client = check("client").isLength({ min: 6 });

exports.validation = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  next();
};
