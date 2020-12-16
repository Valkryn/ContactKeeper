const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth")
const User = require("../models/User")
const { check, validationResult } = require('express-validator');
const Contact = require("../models/Contact")


// @route GET api/contacts
// @desc Get all users contacts
// @access Private
router.get("/", auth, async (req,res) => {
  try{
    const contacts = await Contact.find({user:req.user.id}).sort({date: -1})
    res.json(contacts)
  } catch(err){
    console.error(err.message)
    res.status(500).send("server error")
  }
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
