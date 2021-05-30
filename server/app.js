require('dotenv').config()
var cors = require('cors')
const express = require('express')
const mongoose = require('mongoose');
const app = express()
app.use(cors());
// mongoose connecting line
require("./db/connection");
// const User = require("./models/user");

app.use(express.json());

app.use(require("./router/auth"));
const PORT = process.env.PORT

 
app.get('/', function (req, res) {
  res.send("Home Page")
})

// app.get('/about', function (req, res) {
//     res.send("About Page")
// })

app.get('/contact', function (req, res) {
  // res.cookie("Test", "Thapa")
    res.send("Contact Page")
})

// app.get('/signin', function (req, res) {
//     res.send("Signin Page")
// })

// app.get('/signup', function (req, res) {
//     res.send("Signup Page")
// })
 
app.listen(PORT, ()=>{
    console.log("Server is running on port " + PORT);
})

 // "proxy": "http://localhost:5000",