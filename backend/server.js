const express = require("express");
const cors = require("cors");
//•••NEVIRONMENTAL VARIABLES•••
require("dotenv").config(); //this configures so we can have environment variables 

const app = express();
const port = process.env.PORT || 3000;
//•••MIDDLEWARE•••
app.use(cors()); //•••cors middleware•••
app.use(express.json()); //••this will us to parse json••• 

//•••STARTING THE SERVER, LISTENING THE PORT•••
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});