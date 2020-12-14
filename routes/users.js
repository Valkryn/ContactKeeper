const express = require("express")
const router = express.Router()

// @route POST api/users
// @desc registers a user
// @access Public
router.post("/", (req,res) => {
  res.send("This file registers a user")
})

module.exports = router
