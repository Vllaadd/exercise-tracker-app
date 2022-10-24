const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//•••NEVIRONMENTAL VARIABLES•••
require("dotenv").config(); //this configures so we can have environment variables 

const app = express();
const port = process.env.PORT || 3000;

//•••MIDDLEWARE•••
app.use(cors()); //•••cors middleware•••
app.use(express.json()); //••this will us to parse json••• 

//•••MONGODB DATABASE•••
const uri = process.env.ATLAS_URI; //uri is where our database is stored
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

//•••ROUTES•••
const exercisesRouter = require("./routes/exercises")
const userRouter = require("./routes/users")
app.use("/exercises", exercisesRouter);
app.use("/users", userRouter);


//•••STARTING THE SERVER, LISTENING THE PORT•••
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});