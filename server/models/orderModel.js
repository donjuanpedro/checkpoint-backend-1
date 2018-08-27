let mongoose = require("mongoose");

const schema = new mongoose.Schema({
    
    orderDate: {
        required: true,
        type: String
    },
    orderTime: {
        type: String
    },
    amount: {
        type: String
    }
});

module.exports = mongoose.model("Order", schema);