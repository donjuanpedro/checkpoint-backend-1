let express = require("express");
let bodyParser = require("body-parser");
const app = express();

// put routes here

let mongoose = require("mongoose");
mongoose.Promise = global.Promise
mongoose.connect("mongodb://walkerlyle:d7slRtvK@ds133252.mlab.com:33252/checkpoint-1");

app.use(bodyParser.json());

//app.use routes

const port = process.env.PORT || 3001;
app.listen(port,() => {
    console.log(`Listening on port:${port}`);
})