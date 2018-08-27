// let mongoose = require("mongoose");

// const schema = new mongoose.Schema({
    
//     task: {
//         required: true,
//         type: String
//     },
//     date: {
//         required: true,
//         type: String
//     }
// });

// module.exports = mongoose.model("Task", schema);
let mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task: {
        type: String
    },
    date: {
        type: String
    }
});

module.exports = mongoose.model("Task", taskSchema);