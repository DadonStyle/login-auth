const express = require("express")
const controllers = require("../controllers/controllers")
const {validationTerms, validate} = require("../helpers/validator")

const router = express.Router();

router.post("/login",validationTerms(), validate,controllers.loginController)

router.post("/register",validationTerms(), validate,controllers.registerController)

module.exports = router;

