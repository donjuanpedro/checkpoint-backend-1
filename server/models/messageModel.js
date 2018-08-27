// let mongoose = require("mongoose");

// const schema = new mongoose.Schema({
    
//     name: {
//         required: true,
//         type: String
//     },
//     date: {
//         type: String
//     },
//     message: {
//         type: String
//     }
// });

// module.exports = mongoose.model("Message", schema);
let mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    name: {
        type: String
    },
    date: {
        type: String
    },
    message: {
        type: String
    }
});

module.exports = mongoose.model("Message", messageSchema);