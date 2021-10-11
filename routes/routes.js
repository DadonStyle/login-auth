const express = require("express");
const {
  register,
  login,
  changePassword,
} = require("../controllers/userController");
const { validationTerms, validate } = require("../utill/validator");

const router = express.Router();

// router.put("/changePassword", changePassword);

router.post("/register", validationTerms(), validate, register);

router.post("/login", validationTerms(), validate, login);

module.exports = router;
