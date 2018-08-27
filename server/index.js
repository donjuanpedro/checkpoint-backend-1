let express = require("express");
let bodyParser = require("body-parser");
const app = express();

// put routes here
let OrderRoutes = require("./modelRoutes/ordersRoutes");
let TaskRoutes = require("./modelRoutes/tasksRoutes");
let MessageRoutes = require("./modelRoutes/messageRoutes");

let mongoose = require("mongoose");
mongoose.Promise = global.Promise
mongoose.connect("mongodb://walkerlyle:d7slRtvK@ds133252.mlab.com:33252/checkpoint-1");

app.use(bodyParser.json());

//app.use routes
app.use(OrderRoutes);
app.use(TaskRoutes);
app.use(MessageRoutes);

const port = process.env.PORT || 3001;
app.listen(port,() => {
    console.log(`Listening on port:${port}`);
})