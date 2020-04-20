const { check, validationResult } = require("express-validator");

const inputValidationCheck = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const [error] = errors.array();
    const { msg } = error;
    return res.status(422).json({ message: msg });
  }
  next();
};

const validateInput = [check("fullname").isAlpha(), inputValidationCheck];

const validateFilters = [check("words").notEmpty(), inputValidationCheck]

module.exports = {
  validateInput,
  validateFilters
};
