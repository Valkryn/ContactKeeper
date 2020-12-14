const express = require("express")
const connectDB = require("./config/db")

const app = express()

//Connects to database
connectDB()

// initi body-parser ; used to be a separate NPM but now is inlcuded in express;
// still needs to be initialized
app.use(express.json({ extended:false }))

// Route endpoint "/"
app.get("/" , (req,res ) => {
    res.json({ msg: "Welcome to the Contact Keeper App!!"})
})

//Defining my Routes- the URL will send the required file
//EX: a request to URL /api/users will send files in ./routes/users
app.use("/api/users", require("./routes/users"))
app.use("/api/contacts", require("./routes/contacts"))
app.use("/api/auth", require("./routes/auth"))


// will create a server on specified PORT OR 5000
const PORT = process.env.PORT || 27017

app.listen( PORT, () => console.log(`Server started on port ${PORT}`) )
