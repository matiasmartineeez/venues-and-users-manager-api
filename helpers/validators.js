const { check, validationResult } = require("express-validator");

/* Validations */
// Identificators
exports.venue = check("venue").custom(value => !isNaN(value));
exports.client = check("client").custom(value => !isNaN(value));

// Validations
exports.name = check("name").isLength({ min: 3 });

exports.validation = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  next();
};
