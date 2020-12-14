const express = require("express")
const router = express.Router()

// @route GET api/contacts
// @desc Get all users contacts
// @access Private
router.get("/", (req,res) => {
  res.send("Gets all contacts")
})

// @route POST api/contacts
// @desc Add new contacts
// @access Private
router.post("/", (req,res) => {
  res.send("Adds a new contact")
})

// @route PUT api/contacts/:id
// @desc Updates contact
// @access Private
router.put("/:id", (req,res) => {
  res.send("Updates contact")
})


// @route DELETE api/users/:ID
// @desc Deletes contact
// @access Private
router.delete("/:id", (req,res) => {
  res.send("Deletes Contact")
})

module.exports = router
