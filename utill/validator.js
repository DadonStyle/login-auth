const { check, validationResult } = require("express-validator");

exports.validationTerms = () => {
  return [
    check("email", "email is empty").not().isEmpty(),
    check("email", "not an email").isEmail(),
    check("email", "short email").isLength({ min: 4, max: 150 }),

    check("password", "password is empty").not().isEmpty(),
    check("password")
      .isLength({ min: 4, max: 2000 })
      .withMessage("short password"),
  ];
};

exports.validate = (req, res, next) => {
  const errors = validationResult(req).array({ onlyFirstError: true });
  if (errors.length < 1) {
    return next();
  } else {
    return res.status(400).send(errors[0].msg);
  }
};
