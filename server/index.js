// let express = require("express");
// let bodyParser = require("body-parser");
// const app = express();

// // put routes here
// let OrderRoutes = require("./modelRoutes/ordersRoutes");
// let TaskRoutes = require("./modelRoutes/tasksRoutes");
// let MessageRoutes = require("./modelRoutes/messageRoutes");

// let mongoose = require("mongoose");
// mongoose.Promise = global.Promise
// mongoose.connect("mongodb://walkerlyle:d7slRtvK@ds133252.mlab.com:33252/checkpoint-1");

// app.use(bodyParser.json());



// app.get("/state",function (req,res){
//     res.json(state[req.params.dateTime])
//    });
// app.get("/state",function (req,res){
//     res.json(state[req.params.newComments])
//    });
// app.get("/state",function (req,res){
//     res.json(state[req.params.newTasks])
//    });
// app.get("/state",function (req,res){
//     res.json(state[req.params.newOrders])
//    });
// app.get("/state",function (req,res){
//     res.json(state[req.params.tickets])
//    });
// app.get("/state",function (req,res){
//     res.json(state[req.params.taskItem])
//    });
// //app.use routes
// app.use(OrderRoutes);
// app.use(TaskRoutes);
// app.use(MessageRoutes);

// const port = process.env.PORT || 3001;
// app.listen(port,() => {
//     console.log(`Listening on port:${port}`);
// })

let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let fs = require('fs');
let fetch = require('node-fetch');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://walkerlyle:d7slRtvK@ds133252.mlab.com:33252/checkpoint-1');


let MessageRoutes = require('./modelRoutes/messageRoutes');
let OrderRoutes = require('./modelRoutes/ordersRoutes');
let TaskRoutes = require('./modelRoutes/tasksRoutes');


const app = express();
app.use(bodyParser.json());

app.use(MessageRoutes);
app.use(OrderRoutes);
app.use(TaskRoutes);

app.get("/dateTime", function (request,response) {
    response.json(Date())
})

fs.readFile("data.csv",'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
   const csv = data.split(",")
   const newComments = csv[3]


app.get("/newComments", function(request,response) {
    response.json(Number(newComments.slice(8)))
   })
app.get("/newTasks", function(request,response) {
    response.json(Number(csv[4]))
   })
app.get("/newOrders", function(request,response) {
    response.json(Number(csv[5]))
   })
app.get("/tickets", function(request,response) {
    response.json(Number(csv[6]))
   })
})

app.get("/foxes", function(request,response) {
    fetch('https://randomfox.ca/floof/')
    .then(response => response.json())
    .then(data => {
        response.json(data.image);
    });
})

app.listen(3001, (err) => {
if (err) {
 return console.log('Error', err);
}
console.log('Web server is now living in apartment 3001');
});