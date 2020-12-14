const express = require("express")
const router = express.Router()
const User = require("../models/User")
const { check, validationResult } = require('express-validator');


// @route POST api/users
// @desc registers a user
// @access Public
router.post("/", [
  check("name","Name is required").not().isEmpty(),
  check("email","A valid Email is required").isEmail(),
  check("password","Password must be 6 or more character").isLength({min:6})
  ],
  (req,res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() })
    }
    res.send("passed!")
})

module.exports = router
