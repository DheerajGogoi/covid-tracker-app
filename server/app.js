require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const { config } = require("dotenv");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));


// ! Connecting to DB
const URI = process.env.DB_URL;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => console.log("MongoDB conneceted successfully"))
    .catch((err) => console.log(err))

// ! Setting up ejs view engine
app.set("view engine","ejs");

app.use(express.urlencoded({ extended: true }));

// IMPORTING THE ROUTES START
const donerRouter = require('./routes/doner');
const requestRouter = require('./routes/request');
// IMPORTING THE ROUTES END

// USING THE ROUTES START
app.use('/', requestRouter);
app.use('/', donerRouter);
// USING THE ROUTES END

app.listen(process.env.PORT || 3000,function(){
    console.log("Server is running at port "+process.env.PORT);
})