const express = require("express")
const mongoose = require("mongoose")

const app = express()

// Route endpoint "/"
app.get("/" , (req,res ) => {
    res.json({ msg: "Welcome to the Contact Keeper App!!"})
})

// will create a server on specified PORT OR 5000
const PORT = process.env.PORT || 5000

app.listen( PORT, () => console.log(`Server started on port ${PORT}`) )
