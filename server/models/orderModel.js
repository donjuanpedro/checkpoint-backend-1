// let mongoose = require("mongoose");

// const schema = new mongoose.Schema({
    
//     orderDate: {
//         required: true,
//         type: String
//     },
//     orderTime: {
//         type: String
//     },
//     amount: {
//         type: String
//     }
// });

// module.exports = mongoose.model("Order", schema);
let mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    orderDate: {
        type: String
    },
    orderTime: {
        type: String
    },
    amount: {
        type: String
    }
});

module.exports = mongoose.model("Order", orderSchema);